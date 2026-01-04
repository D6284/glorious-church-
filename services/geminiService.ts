
import { GoogleGenAI } from "@google/genai";

export const generateDailyDevotional = async (language: string = 'en'): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const prompt = language === 'fr' 
      ? "Génère une courte dévotion chrétienne quotidienne inspirante avec un verset biblique, une réflexion et une prière. Le thème doit être 'La Paix de Dieu'."
      : "Generate a short, inspiring daily Christian devotional with a Bible verse, a reflection, and a prayer. Theme: 'The Peace of God'.";

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are a wise and compassionate Christian theologian writing for a modern audience. Keep it concise and spiritually deep.",
        temperature: 0.7,
      },
    });

    return response.text || "Grace and peace be with you.";
  } catch (error) {
    console.error("Error generating devotional:", error);
    return "Error loading daily bread. May God bless you today.";
  }
};
