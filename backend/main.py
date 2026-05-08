import os
import time
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from google import genai
from google.genai import errors

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

# --- TUMHARA PROFILE CONTEXT (DO NOT REMOVE) ---
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

# Gemini client setup
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(req: ChatRequest):
    # Hum 3 bar try karenge temporary server errors ke liye
    for i in range(3):
        try:
            # Hum explicitly 'gemini-1.5-flash' use kar rahe hain
            response = client.models.generate_content(
                model="gemini-1.5-flash", 
                contents=f"{PROFILE_CONTEXT}\nUser: {req.message}"
            )
            
            if response and response.text:
                return {"reply": response.text}
            else:
                return {"reply": "🤖 Maazrat, main is waqt jawab nahi de sakta."}

        except errors.ServerError:
            # Google server busy (500 series)
            if i < 2: 
                time.sleep(2)
                continue
            return {"reply": "⚠️ AI server is busy. Please try again in a few seconds."}

        except errors.ClientError as e:
            # 404 NOT_FOUND ya 429 QUOTA handling
            print(f"Client Error: {e}")
            return {"reply": "⚠️ Quota exhausted ya API configuration ka masla hai. Please check later."}

        except Exception as e:
            print(f"General Error: {e}")
            return {"reply": f"⚠️ Technical issue: {str(e)[:50]}..." }

    return {"reply": "⚠️ AI is not responding. Please try again later."}