const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyAE4Mijq1vGvU_wRldgXvgX14vDgrXGGtk";

async function regenerateHomeHero() {
  try {
    const ai = new GoogleGenAI({
      apiKey: GEMINI_API_KEY,
    });

    console.log('Regenerating home hero image...');

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: "Majestic view of Dubai skyline at sunrise from a high vantage point, symbolizing growth and vision, clear skies, golden light hitting the Burj Khalifa, photorealistic, 8k, cinematic masterpiece",
    });

    const candidates = response.candidates;
    if (!candidates || candidates.length === 0) {
      throw new Error("No candidates returned from Gemini");
    }

    const part = candidates[0].content.parts[0];

    if (part.inlineData) {
      const imageBuffer = Buffer.from(part.inlineData.data, "base64");
      const filepath = path.join(__dirname, 'audit-firms-dubai', 'public', 'images', 'hero', 'home-hero.jpg');
      fs.writeFileSync(filepath, imageBuffer);
      console.log('Home hero image regenerated successfully!');
    } else {
      console.log('No image data received');
    }
  } catch (error) {
    console.error('Error regenerating home hero image:', error.message);
  }
}

regenerateHomeHero();
