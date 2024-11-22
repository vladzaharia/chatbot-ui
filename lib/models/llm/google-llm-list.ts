import { LLM } from "@/types"

const GOOGLE_PLATORM_LINK = "https://ai.google.dev/"

// Google Models -----------------------------
// Gemini 1.5 Flash (8b)
const GEMINI_1_5_FLASH_8B: LLM = {
  modelId: "gemini-1.5-flash-8b",
  modelName: "Gemini 1.5 Flash (8b)",
  provider: "google",
  hostedId: "gemini-1.5-flash-8b",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}
// Gemini 1.5 Flash
const GEMINI_1_5_FLASH: LLM = {
  modelId: "gemini-1.5-flash",
  modelName: "Gemini 1.5 Flash",
  provider: "google",
  hostedId: "gemini-1.5-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

// Gemini 1.5 Pro
const GEMINI_1_5_PRO: LLM = {
  modelId: "gemini-1.5-pro",
  modelName: "Gemini 1.5 Pro",
  provider: "google",
  hostedId: "gemini-1.5-pro",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}

export const GOOGLE_LLM_LIST: LLM[] = [GEMINI_1_5_FLASH_8B, GEMINI_1_5_FLASH, GEMINI_1_5_PRO]
