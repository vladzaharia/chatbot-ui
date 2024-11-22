import { LLM } from "@/types"

const PERPLEXITY_PLATORM_LINK =
  "https://docs.perplexity.ai/docs/getting-started"

// Perplexity Models -----------------------------
// Sonar Small Online
const PERPLEXITY_SONAR_SMALL_ONLINE: LLM = {
  modelId: "llama-3.1-sonar-small-128k-online",
  modelName: "Sonar Small",
  provider: "perplexity",
  hostedId: "llama-3.1-sonar-small-128k-online",
  platformLink: PERPLEXITY_PLATORM_LINK,
  imageInput: false
}

// Sonar Large Online
const PERPLEXITY_SONAR_LARGE_ONLINE: LLM = {
  modelId: "llama-3.1-sonar-large-128k-online",
  modelName: "Sonar Large",
  provider: "perplexity",
  hostedId: "llama-3.1-medium-small-128k-online",
  platformLink: PERPLEXITY_PLATORM_LINK,
  imageInput: false
}

// Sonar Large Offline
const PERPLEXITY_SONAR_LARGE_OFFLINE: LLM = {
  modelId: "llama-3.1-sonar-large-128k-chat",
  modelName: "Sonar Large Offline",
  provider: "perplexity",
  hostedId: "llama-3.1-medium-small-128k-chat",
  platformLink: PERPLEXITY_PLATORM_LINK,
  imageInput: false
}

export const PERPLEXITY_LLM_LIST: LLM[] = [
  PERPLEXITY_SONAR_SMALL_ONLINE,
  PERPLEXITY_SONAR_LARGE_ONLINE,
  PERPLEXITY_SONAR_LARGE_OFFLINE
]
