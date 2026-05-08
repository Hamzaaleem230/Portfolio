import os
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

@app.get("/")
async def home():
    return {"status": "Backend is running!"}

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- TUMHARA PROFILE CONTEXT ---
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

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(req: ChatRequest):
    api_key = os.getenv("GEMINI_API_KEY")
    
    # Direct API URL using stable v1 endpoint
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
    
    headers = {'Content-Type': 'application/json'}
    
    payload = {
        "contents": [{
            "parts": [{"text": f"{PROFILE_CONTEXT}\nUser: {req.message}"}]
        }]
    }

    try:
        response = requests.post(url, headers=headers, json=payload)
        data = response.json()
        
        if response.status_code == 200:
            # Extracting the bot reply from JSON
            bot_reply = data['candidates'][0]['content']['parts'][0]['text']
            return {"reply": bot_reply}
        elif response.status_code == 429:
            return {"reply": "⚠️ Maazrat! Daily limit poori ho gayi hai. Kal try karein."}
        else:
            print(f"API Error: {data}")
            return {"reply": "⚠️ AI abhi busy hai, please thori der baad try karein."}
            
    except Exception as e:
        print(f"Error: {e}")
        return {"reply": "⚠️ Connection ka masla aa raha hai. Please try again."}