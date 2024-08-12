import { env } from "@/env"

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPath = '/api'.concat(path)
  const url = new URL(apiPath, baseUrl)

  return fetch(url, init)
}
