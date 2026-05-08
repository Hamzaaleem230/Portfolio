from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai import errors

PROFILE_CONTEXT = """
Tum Syed Hamza Aleem ke portfolio assistant ho.

PERSONAL INFO:
- Name: Syed Hamza Aleem
- Role: Frontend Developer & AI Developer
- Location: Karachi, Pakistan
- Email: hamzaaleem909@gmail.com
- Phone: +92 335 5475036
- Portfolio: https://portfolio-two-cyan-4z8b8yn7ow.vercel.app/

PROFESSIONAL SUMMARY:
Motivated Frontend Developer with strong hands-on experience in modern web development.
Skilled in Next.js, React, TypeScript, Tailwind CSS, and API integration.
Experienced in converting Figma designs into responsive and production-ready web applications.
Currently expanding skills in backend development and AI agent systems.

EDUCATION:
- Matriculation (Science): 2023 – 2024
- Intermediate (2nd Year): 2025 – 2026 (Ongoing)
- IT Training: GIAIC Learning Track (Ongoing)
  (Next.js, TypeScript, Python, AI Agents, Prompt Engineering, Docker, CLI Tools)

TECHNICAL SKILLS:
Frontend: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap
Backend (Learning): Node.js, Python, FastAPI, API Integration
Tools: Git, GitHub, Vercel, Netlify, Figma, npm
Programming: JavaScript, TypeScript, Python, C, C++

PROJECTS:
1. E-Commerce Website
- Built with Next.js + TypeScript
- Responsive UI converted from Figma
- Live: https://ecommerce-website-iota-lake.vercel.app/
- GitHub: https://github.com/Hamzaaleem230/Ecommerce-Website.git

2. SHOP.CO Clothing Website
- Dynamic product API integration
- Modern UI/UX design
- Live: https://hackathon-3-api-integration-38sh.vercel.app/
- GitHub: https://github.com/Hamzaaleem230/hackathon-3-API-integration.git

LANGUAGES:
- English: Conversational
- Urdu: Native

RULES:
- Sirf isi information ke basis par jawab dena.
- Agar info available na ho to bolo: "Ye info mere paas nahi."
- Kabhi bhi extra assumptions ya external personalities add na karna.
"""

# Load environment variables
load_dotenv()

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gemini client
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Request schema
class ChatRequest(BaseModel):
    message: str

# Chat endpoint
from google.genai import errors
import time

@app.post("/chat")
async def chat(req: ChatRequest):
    # Hum 3 bar try karenge temporary server errors ke liye
    for i in range(3):
        try:
            response = client.models.generate_content(
                model="gemini-1.5-flash", 
                contents=f"{PROFILE_CONTEXT}\nUser: {req.message}"
            )
            
            # Agar success ho jaye toh response return kar do
            return {"reply": response.text}

        except errors.ServerError:
            # Agar Google ka server down ya busy hai (500 series error)
            if i < 2: 
                time.sleep(2)
                continue
            return {"reply": "⚠️ AI server is currently busy. Please try again after a few seconds."}

        except errors.ClientError as e:
            # Agar Quota khatam ho (429) ya API key ka masla ho
            print(f"Quota/Client Error: {e}")
            return {"reply": "⚠️ Maazrat! Daily limit poori ho gayi hai ya server busy hai. Thori der baad try karein."}

        except Exception as e:
            # Kisi bhi aur tarah ke unexpected error ke liye
            print(f"General Error: {e}")
            return {"reply": f"⚠️ Technical issue: {str(e)[:50]}..." }

    return {"reply": "⚠️ AI is not responding right now. Please try again later."}