import { LLM } from "@/types"

const MISTRAL_PLATORM_LINK = "https://docs.mistral.ai/"

// Mistral Models -----------------------------
// Mistral Nemo
const MISTRAL_NEMO: LLM = {
  modelId: "open-mistral-nemo",
  modelName: "Mistral Nemo",
  provider: "mistral",
  hostedId: "open-mistral-nemo",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0,
    outputCost: 0
  }
}

// Mistral Small (UPDATED 12/21/23)
const MISTRAL_SMALL: LLM = {
  modelId: "mistral-small-latest",
  modelName: "Mistral Small",
  provider: "mistral",
  hostedId: "mistral-small-latest",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0,
    outputCost: 0
  }
}

// Mistral Large
const MISTRAL_LARGE: LLM = {
  modelId: "mistral-large-latest",
  modelName: "Mistral Large",
  provider: "mistral",
  hostedId: "mistral-large-latest",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0,
    outputCost: 0
  }
}

export const MISTRAL_LLM_LIST: LLM[] = [
  MISTRAL_NEMO,
  MISTRAL_SMALL,
  MISTRAL_LARGE
]
