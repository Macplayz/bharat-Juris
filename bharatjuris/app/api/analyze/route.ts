import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: NextRequest) {
  try {
    // 1. Check for API Key
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: "Server Error: Missing GROQ_API_KEY" }, { status: 500 });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    // 2. Get File
    const data = await req.formData();
    const file = data.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // 3. Strict Image Check (PDFs crash this specific model)
    if (file.type === 'application/pdf') {
      return NextResponse.json(
        { error: "This AI model supports Images only. Please upload a Screenshot (JPG/PNG)." }, 
        { status: 400 }
      );
    }

    // 4. Convert to Base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    // 5. Check Size (Groq limit is ~4MB)
    if (base64Image.length > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Image too large. Please use an image under 4MB." }, { status: 400 });
    }

    // 6. Call Groq AI
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: [
            { 
              type: "text", 
              text: "Analyze this legal document image. Return valid JSON with: title, summaryPoints (label, text, iconType)." 
            },
            { 
              type: "image_url", 
              image_url: { url: base64Image } 
            },
          ],
        },
      ],
      // Use the stable 11b vision model
      model: "llama-3.2-11b-vision-preview", 
      temperature: 0.1,
      response_format: { type: "json_object" },
    });

    const content = completion.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error("AI returned empty response");
    }

    return NextResponse.json(JSON.parse(content));

  } catch (error: any) {
    console.error("GROQ ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}