import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Neo", a sophisticated AI assistant for the portfolio of a Senior Full Stack Developer.
Your tone is professional yet witty, concise, and enthusiastic about technology.
You can answer questions about the developer's skills (React, TypeScript, Node.js, AI), experience, and projects based on general software engineering knowledge.
If asked about contact info, suggest using the contact form below.
Keep responses short (under 100 words) unless asked for a detailed technical explanation.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Convert simplified history to format expected by Chat (optional if using single-turn, but let's do single-turn with context for simplicity or use chat)
    // We will use generateContent with system instruction for simplicity in this stateless service wrapper
    
    const prompt = `
    History:
    ${history.map(h => `${h.role}: ${h.text}`).join('\n')}
    
    User: ${message}
    Model:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm processing that... just a moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to communicate with the AI.");
  }
};