# from agents import GuardrailFunctionOutput, output_guardrail, RunContextWrapper, Runner, Agent
# from my_agents.guardrial_agents import guardrial_agent

# @output_guardrail
# async def guardrial_output_function(ctx: RunContextWrapper, agent: Agent, output):
#     result = await Runner.run(guardrial_agent, input=output, context=ctx.context)
#     return GuardrailFunctionOutput(
#         output_info=result.final_output,
#         tripwire_triggered=result.final_output.avoid_other_query
#     )
