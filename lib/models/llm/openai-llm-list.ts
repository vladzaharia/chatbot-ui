import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models -----------------------------
const GPT_4O: LLM = {
  modelId: "gpt-4o",
  modelName: "GPT-4o",
  provider: "openai",
  hostedId: "gpt-4o",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10
  }
}
const GPT_4O_MINI: LLM = {
  modelId: "gpt-4o-mini",
  modelName: "GPT-4o mini",
  provider: "openai",
  hostedId: "gpt-4o-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.60
  }
}
const CHATGPT_4O: LLM = {
  modelId: "chatgpt-4o-latest",
  modelName: "ChatGPT GPT-4o",
  provider: "openai",
  hostedId: "chatgpt-4o-latest",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5,
    outputCost: 15
  }
}

// Preview models
const GPT_O1_PREVIEW: LLM = {
  modelId: "o1-preview",
  modelName: "GPT-o1 (preview)",
  provider: "openai",
  hostedId: "o1-preview",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 15,
    outputCost: 60
  }
}
const GPT_O1_MINI: LLM = {
  modelId: "o1-mini",
  modelName: "GPT-o1 mini (preview)",
  provider: "openai",
  hostedId: "o1-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 12
  }
}

export const OPENAI_LLM_LIST: LLM[] = [
  GPT_4O_MINI,
  GPT_4O,
  CHATGPT_4O,
  GPT_O1_MINI,
  GPT_O1_PREVIEW,
]
