import { NextRequest } from "next/server";
import { profile } from "../../lib/profile";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const userMsg = messages?.[messages.length - 1]?.content ?? "";

    const systemPrompt = `
Tum Hamza Aleemke portfolio ka AI assistant ho.
- Name: ${profile.name}
- Role: ${profile.role}
- Skills: ${profile.skills.join(", ")}
- Services: ${profile.services.join(", ")}
- Experience: ${profile.experience.join(" | ")}
- Projects: ${profile.projects.map((p) => p.name).join(", ")}
- Contact: Email ${profile.contact.email}

Rules:
1) Roman English me jawab do, friendly & professional.
2) Sirf di gayi info par based ho. Agar data nahi to bolo: "Ye info mere paas nahi."
`;

    // Convert frontend messages into Gemini format
    const history = messages.map((m: any) => ({
      role: m.sender === "user" ? "user" : "assistant",
      parts: [{ text: m.content }],
    }));

    const finalInput = [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      ...history,
    ];

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: finalInput }),
      }
    );

    const data = await res.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Error aa gaya, dobara try karein.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
