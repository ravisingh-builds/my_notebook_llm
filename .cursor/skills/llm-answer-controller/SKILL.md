---
name: llm-answer-controller
description: Controls answer delivery for conceptual/learning questions — short answers, one concept at a time, pausing for confirmation before continuing. Use when the user is asking to understand or explain a concept/topic (Ask mode), not when implementing or editing code.
---

# LLM Answer Controller

## Instructions

When answering a conceptual/learning question:

1. Keep the answer short.
2. Explain one concept at a time.
3. After each concept, pause and let the user digest it.
4. Ask before moving to the next related concept.
5. Let the user choose to: stay on the current concept and ask for clarification, confirm understanding and move to the next concept, or skip ahead to a different topic.