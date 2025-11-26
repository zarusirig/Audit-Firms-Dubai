import { generateImage } from "./src/lib/gemini";
import fs from "fs";
import path from "path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images", "hero");

if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function regenerateHomeImage() {
  const filepath = path.join(IMAGES_DIR, "home-hero.jpg");

  if (fs.existsSync(filepath)) {
    console.log("Home hero image already exists.");
    return;
  }

  console.log("Regenerating home hero image...");

  try {
    const imageBuffer = await generateImage(
      "Majestic view of Dubai skyline at sunrise from a high vantage point, symbolizing growth and vision, clear skies, golden light hitting the Burj Khalifa, photorealistic, 8k, cinematic masterpiece"
    );
    fs.writeFileSync(filepath, imageBuffer);
    console.log("Home hero image regenerated successfully!");
  } catch (error) {
    console.error("Failed to regenerate home hero image:", error);
  }
}

regenerateHomeImage();
