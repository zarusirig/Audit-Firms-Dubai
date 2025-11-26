import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Accessibility rules to prevent WCAG contrast violations
  {
    rules: {
      // Warn when using low-contrast text colors that fail WCAG AA
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'JSXAttribute[name.name="className"][value.value=/text-(gray|neutral|slate)-(300|400)/]',
          message: 'Text colors gray/neutral/slate 300-400 fail WCAG AA (4.5:1). Use neutral-600+ for sufficient contrast on white backgrounds.',
        },
        {
          selector: 'JSXAttribute[name.name="className"][value.value=/opacity-(30|40|50|60)(?!.*bg-)/]',
          message: 'Avoid using opacity 30-60 on text elements. This reduces contrast and fails WCAG AA. Use color values instead (e.g., text-white/90 or text-neutral-600).',
        },
      ],
    },
  },
]);

export default eslintConfig;
