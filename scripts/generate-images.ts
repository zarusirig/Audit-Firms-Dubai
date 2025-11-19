import { config, subscribe } from "@fal-ai/serverless-client";
import fs from "fs";
import path from "path";
import https from "https";

const FAL_KEY = "b3e50608-45e5-4854-9106-bb38f185e0ab:2eb81912f013aa82e5aaf3cde7100c6f";

// Configure the client
config({
  credentials: FAL_KEY,
});

const IMAGES_DIR = path.join(process.cwd(), "public", "images", "services");

if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function downloadImage(url: string, filepath: string) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve(true));
        });
      } else {
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download image: ${res.statusCode}`));
      }
    }).on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
    });
  });
}

async function generateImage(prompt: string, filename: string) {
  const filepath = path.join(IMAGES_DIR, filename);
  if (fs.existsSync(filepath)) {
    console.log(`Image ${filename} already exists, skipping.`);
    return;
  }

  console.log(`Generating: ${filename}...`);
  try {
    const result: any = await subscribe("fal-ai/flux-pro/v1.1", {
      input: {
        prompt: prompt + ", photorealistic, 8k, ultra detailed, professional corporate photography, cinematic lighting, dubai business context",
        image_size: "landscape_16_9",
        safety_tolerance: "2",
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          update.logs.map((log) => log.message).forEach(console.log);
        }
      },
    });

    if (result.images && result.images.length > 0) {
      const imageUrl = result.images[0].url;
      console.log(`Generated URL: ${imageUrl}`);
      await downloadImage(imageUrl, filepath);
      console.log(`Saved to ${filename}`);
    }
  } catch (error) {
    console.error(`Error generating ${filename}:`, error);
  }
}

const LANDING_PAGES = [
  {
    name: "external-audit-hero.jpg",
    prompt: "Modern glass skyscraper office in Dubai, interior view of a boardroom table with financial audit documents, view of Burj Khalifa through window, blue and gold professional lighting, trusted financial atmosphere"
  },
  {
    name: "internal-audit-hero.jpg",
    prompt: "Close up of hands reviewing a complex financial chart on a tablet, modern office background with Dubai skyline, focus on precision and security, warm corporate tones"
  },
  {
    name: "vat-audit-hero.jpg",
    prompt: "Clean white desk with a calculator, UAE flag pin, and tax documents, blurred modern Dubai office background, bright and professional"
  },
  {
    name: "rera-audit-hero.jpg",
    prompt: "Real estate development blueprints and financial reports on a table, view of Dubai Marina skyscrapers in background, high-end real estate office atmosphere"
  },
  {
    name: "due-diligence-hero.jpg",
    prompt: "Two professionals shaking hands in a high-rise Dubai office, silhouette against a sunset city view, symbolizing trust and deal completion, cinematic"
  },
  {
    name: "forensic-audit-hero.jpg",
    prompt: "Magnifying glass effect over a digital spreadsheet on a laptop screen, abstract binary code in background, cyber security and fraud detection theme, cool blue tones"
  }
];

async function main() {
  for (const page of LANDING_PAGES) {
    await generateImage(page.prompt, page.name);
  }
}

main();
