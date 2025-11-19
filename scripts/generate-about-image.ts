import { config, subscribe } from "@fal-ai/serverless-client";
import fs from "fs";
import path from "path";
import https from "https";

const FAL_KEY = "b3e50608-45e5-4854-9106-bb38f185e0ab:2eb81912f013aa82e5aaf3cde7100c6f";

// Configure the client
config({
  credentials: FAL_KEY,
});

const IMAGES_DIR = path.join(process.cwd(), "public", "images", "hero");

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
    name: "about-hero.jpg",
    prompt: "Historic and professional portrait of a diverse team of auditors in a modern Dubai boardroom, symbolizing 37 years of excellence, warm lighting, trusted atmosphere"
  }
];

async function main() {
  for (const page of LANDING_PAGES) {
    await generateImage(page.prompt, page.name);
  }
}

main();

