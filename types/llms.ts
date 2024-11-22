import { ModelProvider } from "."

export type LLMID =
  | OpenAILLMID
  | GoogleLLMID
  | AnthropicLLMID
  | MistralLLMID
  | GroqLLMID
  | PerplexityLLMID

// OpenAI Models (UPDATED 5/13/24)
export type OpenAILLMID =
  | "gpt-4o" // GPT-4o
  | "gpt-4o-mini" // GPT-4o
  | "chatgpt-4o-latest" // ChatGPT's GPT-4o
  | "o1-preview" // GPT-o1 preview
  | "o1-mini" // GPT-o1 mini preview
  | "gpt-4-turbo-preview" // GPT-4 Turbo
  | "gpt-4-vision-preview" // GPT-4 Vision
  | "gpt-4" // GPT-4
  | "gpt-3.5-turbo" // Updated GPT-3.5 Turbo

// Google Models
export type GoogleLLMID =
  | "gemini-pro" // Gemini Pro
  | "gemini-pro-vision" // Gemini Pro Vision
  | "gemini-1.5-pro-latest" // Gemini 1.5 Pro
  | "gemini-1.5-flash" // Gemini 1.5 Flash

// Anthropic Models
export type AnthropicLLMID =
  | "claude-3-opus-latest" // Claude 3 Opus
  | "claude-3-5-haiku-latest" // Claude 3.5 Haiku
  | "claude-3-5-sonnet-latest" // Claude 3.5 Sonnet

// Mistral Models
export type MistralLLMID =
  | "open-mistral-nemo" // Mistral Nemo
  | "mistral-small-latest" // Mistral Small
  | "mistral-large-latest" // Mistral Large

export type GroqLLMID =
  | "llama3-groq-70b-8192-tool-use-preview" // LLaMA3 Groq
  | "llama3.1-70b-versatile" // LLaMA3.1-70b
  | "llama3.1-8b-instant" // LLaMA3.1-8b
  | "llama3.2-3b-preview" // LLaMA3.2-3b (preview)

// Perplexity Models (UPDATED 1/31/24)
export type PerplexityLLMID =
  | "llama-3.1-sonar-small-128k-chat" // Sonar Small Chat
  | "llama-3.1-sonar-small-128k-online" // Sonar Small Online
  | "llama-3.1-sonar-medium-128k-chat" // Sonar Medium Chat
  | "llama-3.1-sonar-medium-128k-online" // Sonar Medium Online
  | "llama-3.1-sonar-large-128k-chat" // Sonar Large Chat
  | "llama-3.1-sonar-large-128k-online" // Sonar Large Online

export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface OpenRouterLLM extends LLM {
  maxContext: number
}
