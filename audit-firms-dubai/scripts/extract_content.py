#!/usr/bin/env python3
"""
Extract TypeScript content data to JSON files
This script parses TypeScript files and extracts data objects to JSON
"""

import json
import re
import os
from pathlib import Path

# Directories
script_dir = Path(__file__).parent
content_dir = script_dir.parent / "src" / "lib" / "content"
output_dir = script_dir.parent / "public" / "data"

# Ensure output directory exists
output_dir.mkdir(parents=True, exist_ok=True)

print("🚀 Extracting TypeScript content to JSON...\n")

# Files to process
files = [
    ("team.ts", "TEAM_MEMBERS"),
    ("locations.ts", "LOCATIONS"),
    ("services.ts", "SERVICES"),
    ("industries.ts", "INDUSTRIES"),
    ("blog.ts", "BLOG_POSTS"),
    ("guides.ts", "GUIDES"),
]

def extract_object(content, var_name):
    """Extract the exported object from TypeScript content"""
    # Find the export const declaration
    pattern = rf"export const {var_name}:\s*Record<[^>]+>\s*=\s*(\{{)"
    match = re.search(pattern, content)

    if not match:
        return None

    start_pos = match.start(1)
    brace_count = 0
    in_string = False
    escape_next = False
    string_char = None
    end_pos = start_pos

    for i in range(start_pos, len(content)):
        char = content[i]

        if escape_next:
            escape_next = False
            continue

        if char == '\\':
            escape_next = True
            continue

        if char in ['"', "'", '`'] and not in_string:
            in_string = True
            string_char = char
        elif char == string_char and in_string:
            in_string = False
            string_char = None
        elif not in_string:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = i + 1
                    break

    return content[start_pos:end_pos]

def ts_to_json(ts_str):
    """Convert TypeScript object literal to JSON"""
    # This is a simplified conversion
    # Remove trailing commas
    ts_str = re.sub(r',(\s*[}\]])', r'\1', ts_str)

    # Convert single quotes to double quotes (simple approach)
    # Handle property names without quotes
    ts_str = re.sub(r"([{,]\s*)([a-zA-Z_][a-zA-Z0-9_-]*)(\s*):", r'\1"\2"\3:', ts_str)

    # Convert single quotes to double quotes for string values
    # This is simplified and may not handle all cases
    ts_str = re.sub(r"'([^'\\]*(\\.[^'\\]*)*)'", lambda m: '"' + m.group(1).replace('"', '\\"') + '"', ts_str)

    return ts_str

for filename, var_name in files:
    input_path = content_dir / filename
    output_path = output_dir / filename.replace('.ts', '.json')

    print(f"📄 Processing {filename}...")

    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract the object
        obj_str = extract_object(content, var_name)

        if not obj_str:
            print(f"❌ Could not find {var_name} in {filename}\n")
            continue

        # Try to convert to JSON
        try:
            json_str = ts_to_json(obj_str)
            data = json.loads(json_str)

            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)

            size_kb = output_path.stat().st_size / 1024
            print(f"✅ Created {output_path.name} ({size_kb:.2f} KB)\n")

        except json.JSONDecodeError as e:
            print(f"⚠️  JSON parsing failed for {filename}: {e}")
            print(f"   Saving raw converted string for manual review\n")
            with open(output_path.with_suffix('.txt'), 'w', encoding='utf-8') as f:
                f.write(json_str)

    except Exception as e:
        print(f"❌ Error processing {filename}: {e}\n")

print("🎉 Extraction complete!")
