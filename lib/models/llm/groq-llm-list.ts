import { LLM } from "@/types"

const GROQ_PLATORM_LINK = "https://groq.com/"

const LLaMA3_1_8B: LLM = {
  modelId: "llama3.1-8b-instant",
  modelName: "LLaMA3.1 8b",
  provider: "groq",
  hostedId: "llama3.1-8b-instant",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.05,
    outputCost: 0.08
  }
}

const LLaMA3_1_70B: LLM = {
  modelId: "llama3.1-70b-versatile",
  modelName: "LLaMA3.1 70b",
  provider: "groq",
  hostedId: "llama3.1-70b-versatile",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.59,
    outputCost: 0.79
  }
}

const LLaMA3_2_3B_PREVIEW: LLM = {
  modelId: "llama3.2-3b-preview",
  modelName: "LLaMA3.2 3b (preview)",
  provider: "groq",
  hostedId: "llama3.2-3b-preview",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.06,
    outputCost: 0.06
  }
}

const LLaMA3_GROQ: LLM = {
  modelId: "llama3-groq-70b-8192-tool-use-preview",
  modelName: "LLaMA3 70b (Groq)",
  provider: "groq",
  hostedId: "llama3-groq-70b-8192-tool-use-preview",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.89,
    outputCost: 0.89
  }
}



export const GROQ_LLM_LIST: LLM[] = [
  LLaMA3_2_3B_PREVIEW,
  LLaMA3_1_8B,
  LLaMA3_1_70B,
  LLaMA3_GROQ
]
