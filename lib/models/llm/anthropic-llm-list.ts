import { LLM } from "@/types"

const ANTHROPIC_PLATFORM_LINK =
  "https://docs.anthropic.com/claude/reference/getting-started-with-the-api"

// Anthropic Models -----------------------------
// Claude 3.5
const CLAUDE_3_5_HAIKU: LLM = {
  modelId: "claude-3-5-haiku-latest",
  modelName: "Claude 3.5 Haiku",
  provider: "anthropic",
  hostedId: "claude-3-5-haiku-latest",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1,
    outputCost: 5
  }
}
const CLAUDE_3_5_SONNET: LLM = {
  modelId: "claude-3-5-sonnet-latest",
  modelName: "Claude 3.5 Sonnet",
  provider: "anthropic",
  hostedId: "claude-3-5-sonnet-latest",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 15
  }
}

// Claude 3
const CLAUDE_3_OPUS: LLM = {
  modelId: "claude-3-opus-latest",
  modelName: "Claude 3 Opus",
  provider: "anthropic",
  hostedId: "claude-3-opus-latest",
  platformLink: ANTHROPIC_PLATFORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 15,
    outputCost: 75
  }
}

export const ANTHROPIC_LLM_LIST: LLM[] = [
  CLAUDE_3_5_HAIKU,
  CLAUDE_3_5_SONNET,
  CLAUDE_3_OPUS
]
