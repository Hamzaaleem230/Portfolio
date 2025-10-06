import { NextRequest } from "next/server";
import { profile } from "../../lib/profile";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `
Tum Syed Hamza Aleem ke portfolio ka AI assistant ho.
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

    const userMsg = messages?.[messages.length - 1]?.content ?? "";

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${systemPrompt}\nUser: ${userMsg}` }],
            },
          ],
        }),
      }
    );

    const data = await res.json();
    console.log("Gemini API Response:", JSON.stringify(data, null, 2)); // 👈 Debug

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "⚠️ Error aa gaya, dubara try karain.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Server error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
