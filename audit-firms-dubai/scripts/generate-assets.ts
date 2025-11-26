import { generateImage } from "../src/lib/gemini";
import fs from "fs";
import path from "path";

// Define directories
const SERVICES_DIR = path.join(process.cwd(), "public", "images", "services");
const INDUSTRIES_DIR = path.join(process.cwd(), "public", "images", "industries");
const LOCATIONS_DIR = path.join(process.cwd(), "public", "images", "locations");
const HERO_DIR = path.join(process.cwd(), "public", "images", "hero");

// Ensure directories exist
[SERVICES_DIR, INDUSTRIES_DIR, LOCATIONS_DIR, HERO_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

interface Asset {
  name: string;
  prompt: string;
  dir: string;
}

const ASSETS: Asset[] = [
  // --- Services ---
  {
    name: "business-valuation-hero.jpg",
    prompt: "Professional business valuation concept, financial graphs and balance scales on a mahogany desk, blurred Dubai office background, golden hour lighting, photorealistic, 8k",
    dir: SERVICES_DIR
  },
  {
    name: "cfo-services-hero.jpg",
    prompt: "Executive financial strategy meeting in a modern Dubai boardroom, focus on a tablet showing growth charts, confident leadership atmosphere, photorealistic, 8k",
    dir: SERVICES_DIR
  },
  {
    name: "ifrs-implementation-hero.jpg",
    prompt: "Global financial standards concept, globe and accounting documents on a desk, clean and organized modern office, blue corporate tones, photorealistic, 8k",
    dir: SERVICES_DIR
  },
  {
    name: "tax-consultation-hero.jpg",
    prompt: "Consultant reviewing tax documents with a client, close up of hands and pen, calculator, professional and helpful atmosphere, Dubai context, photorealistic, 8k",
    dir: SERVICES_DIR
  },
  // --- Industries ---
  {
    name: "real-estate-hero.jpg",
    prompt: "Panoramic view of Dubai skyline with construction cranes and modern architecture, blueprints overlay, industry specific, photorealistic, 8k",
    dir: INDUSTRIES_DIR
  },
  {
    name: "healthcare-hero.jpg",
    prompt: "Modern hospital administration office in Dubai, medical clipboard and stethoscope on desk, clean white and teal tones, professional healthcare management, photorealistic, 8k",
    dir: INDUSTRIES_DIR
  },
  {
    name: "technology-hero.jpg",
    prompt: "Futuristic server room or modern tech office in Dubai Internet City, glowing data streams, innovation and audit concept, cyber blue and neon accents, photorealistic, 8k",
    dir: INDUSTRIES_DIR
  },
  {
    name: "manufacturing-hero.jpg",
    prompt: "Automated manufacturing line in a clean factory, industrial audit checklist on a tablet in foreground, efficiency and precision, photorealistic, 8k",
    dir: INDUSTRIES_DIR
  },
  {
    name: "trading-hero.jpg",
    prompt: "Busy shipping port in Dubai (Jebel Ali) with containers, logistics and trade documents in foreground, global commerce theme, photorealistic, 8k",
    dir: INDUSTRIES_DIR
  },
  {
    name: "ecommerce-hero.jpg",
    prompt: "Online shopping concept, laptop with shopping cart icons, packages in background, digital payment terminal, modern retail audit, photorealistic, 8k",
    dir: INDUSTRIES_DIR
  },
  {
    name: "hospitality-hero.jpg",
    prompt: "Luxury hotel lobby in Dubai, elegant interior design, guest service concept, warm welcoming lighting, high-end hospitality audit, photorealistic, 8k",
    dir: INDUSTRIES_DIR
  },
    {
    name: "financial-services-hero.jpg",
    prompt: "Stock market screens in a modern trading floor in DIFC, financial graphs, fast-paced professional environment, photorealistic, 8k",
    dir: INDUSTRIES_DIR
  },
  // --- Locations ---
  {
    name: "dubai-marina-hero.jpg",
    prompt: "Stunning aerial view of Dubai Marina at twilight, yachts in the canal, illuminated skyscrapers, luxury lifestyle and business, photorealistic, 8k",
    dir: LOCATIONS_DIR
  },
  {
    name: "jlt-hero.jpg",
    prompt: "Jumeirah Lake Towers (JLT) skyline reflected in the lake, modern business district, daytime, clear blue sky, photorealistic, 8k",
    dir: LOCATIONS_DIR
  },
  {
    name: "difc-hero.jpg",
    prompt: "The Gate Building at Dubai International Financial Centre (DIFC), iconic architecture, business professionals walking, symbol of finance, photorealistic, 8k",
    dir: LOCATIONS_DIR
  },
  {
    name: "business-bay-hero.jpg",
    prompt: "Business Bay canal view with Burj Khalifa towering in background, modern commercial towers, dynamic business hub, photorealistic, 8k",
    dir: LOCATIONS_DIR
  },
  {
    name: "downtown-dubai-hero.jpg",
    prompt: "Downtown Dubai street level view, luxury cars and high-end retail, Burj Khalifa visible, vibrant city life, photorealistic, 8k",
    dir: LOCATIONS_DIR
  },
  {
    name: "abu-dhabi-hero.jpg",
    prompt: "Abu Dhabi Corniche skyline, Etihad Towers, modern capital city business district, sunset, photorealistic, 8k",
    dir: LOCATIONS_DIR
  },
   {
    name: "sharjah-hero.jpg",
    prompt: "Sharjah Al Majaz Waterfront, traditional islamic architecture mixed with modern buildings, serene and cultural business environment, photorealistic, 8k",
    dir: LOCATIONS_DIR
  },
  // --- General ---
  {
    name: "home-hero.jpg",
    prompt: "Majestic view of Dubai skyline at sunrise from a high vantage point, symbolizing growth and vision, clear skies, golden light hitting the Burj Khalifa, photorealistic, 8k, cinematic masterpiece",
    dir: HERO_DIR
  },
  {
    name: "about-hero.jpg",
    prompt: "Diverse team of professional auditors in a modern conference room in Dubai, discussing strategy, smiling and confident, trusted partners, photorealistic, 8k",
    dir: HERO_DIR
  }
];

async function main() {
  console.log("Starting Nano Banana (Gemini) Image Generation - Full Suite...");
  
  for (const asset of ASSETS) {
    const filepath = path.join(asset.dir, asset.name);
    
    if (fs.existsSync(filepath)) {
      console.log(`Image ${asset.name} already exists, skipping.`);
      continue;
    }

    console.log(`Generating: ${asset.name}...`);
    
    try {
      const imageBuffer = await generateImage(asset.prompt);
      if (imageBuffer) {
        fs.writeFileSync(filepath, imageBuffer);
        console.log(`Saved to ${filepath}`);
      } else {
        console.error(`Failed to generate ${asset.name}: No image data received.`);
      }
    } catch (error: any) {
      if (error.message && error.message.includes("429")) {
        console.error(`\n⚠️  Quota Exceeded (429) for ${asset.name}.`);
        console.error("Please check your billing details and quotas.");
        // Optional: Wait and retry logic could go here, but for now we break or continue.
        // Breaking is safer to avoid spamming.
        break; 
      } else {
        console.error(`Failed to generate ${asset.name}:`, error.message || error);
      }
    }
  }
  
  console.log("Generation complete!");
}

main();
