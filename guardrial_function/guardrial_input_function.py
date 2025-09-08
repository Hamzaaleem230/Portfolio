from agents import input_guardrail, GuardrailFunctionOutput, RunContextWrapper, Agent

def guardrail_input_function_logic(user_input: str):
    text = user_input.lower().strip()

    greetings = [
        "hello", "hi", "hey", "salam", "assalamu alaikum", "walaikum assalam",
        "how are you", "what's up", "thanks", "thx"
    ]
    if any(word in text for word in greetings):
        return {"portfolio_related_query": True, "avoid_other_query": False, "reason": "Greeting/polite chat → valid."}

    keywords = [
        "hamza", "skills", "projects", "portfolio", "experience",
        "services", "developer", "background", "bio"
    ]
    if any(word in text for word in keywords):
        return {"portfolio_related_query": True, "avoid_other_query": False, "reason": "Hamza-related query → valid."}

    return {"portfolio_related_query": False, "avoid_other_query": True, "reason": "Unrelated/off-topic → invalid."}

@input_guardrail
async def guardrial_input_function(ctx: RunContextWrapper, agent: Agent, input: str):
    result = guardrail_input_function_logic(str(input))
    return GuardrailFunctionOutput(
        output_info=result["reason"],
        tripwire_triggered=not result["portfolio_related_query"]
    )
