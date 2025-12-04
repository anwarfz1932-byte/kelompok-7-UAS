import { GoogleGenAI, Type } from "@google/genai";
import { ToxicityResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeTextToxicity = async (text: string): Promise<ToxicityResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analisis teks berikut untuk potensi cyberbullying atau bahasa toksik (konteks bahasa Indonesia/Gaul). 
      Teks: "${text}"
      
      Berikan skor (0-100) di mana 100 sangat toksik.
      Berikan saran yang membangun untuk pengguna jika mereka ingin memposting ini (atau pujian jika kalimatnya baik).
      Kategorikan jenisnya (misal: "Aman", "Hate Speech", "Sarkasme Kasar", "Body Shaming", dll).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isToxic: { type: Type.BOOLEAN },
            score: { type: Type.NUMBER },
            category: { type: Type.STRING },
            advice: { type: Type.STRING },
          },
          required: ["isToxic", "score", "category", "advice"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as ToxicityResult;
    }
    
    throw new Error("No response text");
  } catch (error) {
    console.error("Error analyzing text:", error);
    // Fallback in case of error
    return {
      isToxic: false,
      score: 0,
      category: "Error",
      advice: "Maaf, sistem sedang sibuk. Coba lagi nanti.",
    };
  }
};