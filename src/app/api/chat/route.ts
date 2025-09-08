import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const res = await fetch("http://127.0.0.1:8000/get_reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    return NextResponse.json({ reply: data.reply });
  } catch (err) {
    return NextResponse.json({ reply: "⚠️ Error: Backend not responding" });
  }
}
