import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyAE4Mijq1vGvU_wRldgXvgX14vDgrXGGtk";

if (!GEMINI_API_KEY) {
  console.warn("GEMINI_API_KEY is not set.");
}

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

export const generateImage = async (prompt: string, outputBuffer: boolean = true) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: prompt,
    });

    const candidates = response.candidates;
    if (!candidates || candidates.length === 0) {
      throw new Error("No candidates returned from Gemini");
    }

    const firstCandidate = candidates[0];
    if (!firstCandidate?.content) {
      throw new Error("No content in candidate");
    }

    const parts = firstCandidate.content?.parts || [];
    if (!parts || parts.length === 0) {
      throw new Error("No parts in content");
    }

    const imagePart = parts.find((p: any) => p.inlineData);

    if (imagePart && imagePart.inlineData && imagePart.inlineData.data) {
      // Return the base64 data or buffer
      if (outputBuffer) {
        return Buffer.from(imagePart.inlineData.data, "base64");
      }
      return imagePart.inlineData.data;
    }
    
    console.log("Full Candidates Content:", JSON.stringify(candidates, null, 2));
    throw new Error("No image data received in any part");
  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    throw error;
  }
};

