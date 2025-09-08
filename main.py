from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from my_agents.agents import HamzaAgent
from agents import Runner, SQLiteSession, set_tracing_disabled
import asyncio

set_tracing_disabled(True)

app = FastAPI()

# Allow Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Session store
session = SQLiteSession("user_1", "conversations.db")

@app.post("/get_reply")
async def get_reply(payload: dict):
    prompt = payload.get("message", "")
    if not prompt:
        return {"reply": "⚠️ Please provide a message."}
    
    try:
        # Hamza Agent ko call
        loop = asyncio.get_event_loop()
        response = await Runner.run(
            starting_agent=HamzaAgent,
            input=prompt,
            session=session
        )
        return {"reply": response.final_output}

    except Exception as e:
        return {"reply": f"⚠️ Error: {str(e)}"}
