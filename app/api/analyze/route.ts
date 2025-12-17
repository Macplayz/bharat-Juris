import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "Server Error: Missing GROQ_API_KEY" }, { status: 500 });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const data = await req.formData();
    const file = data.get("file") as File;

    if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    // 1. Strict Image Check
    if (file.type === 'application/pdf') {
      return NextResponse.json(
        { error: "This AI model supports Images only. Please upload a Screenshot (JPG/PNG)." }, 
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    // 2. ULTRA-STRICT PROMPT FOR SUMMARIZATION
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: [
            { 
              type: "text", 
              text: `
                You are an elite Legal Summarizer. 
                DO NOT transcribe the document. 
                DO NOT describe the image visually.
                
                YOUR TASK: Identify the core legal intent and return ONLY this JSON structure:
                
                {
                  "title": "A short 3-5 word title of the document (e.g., 'Rental Agreement Renewal')",
                  "summaryPoints": [
                    { 
                      "label": "Document Type", 
                      "text": "What is this legally? (e.g., Court Summons / Affidavit / Contract)", 
                      "iconType": "file" 
                    },
                    { 
                      "label": "Key Dates & Urgency", 
                      "text": "Extract specific deadlines or dates mentioned. If none, state 'No immediate deadline'.", 
                      "iconType": "clock" 
                    },
                    { 
                      "label": "Action Required", 
                      "text": "What must the user do next? (e.g., 'Sign and return' or 'Appear in court').", 
                      "iconType": "action" 
                    }
                  ]
                }
              ` 
            },
            { 
              type: "image_url", 
              image_url: { url: base64Image } 
            },
          ],
        },
      ],
      // Use Llama 4 Scout (17B) or Llama 3.2 Vision (11B)
      model: "meta-llama/llama-4-scout-17b-16e-instruct", 
      temperature: 0.1, // Low temp = More factual/strict
      response_format: { type: "json_object" },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) throw new Error("AI returned empty response");

    return NextResponse.json(JSON.parse(content));

  } catch (error: any) {
    console.error("GROQ ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}