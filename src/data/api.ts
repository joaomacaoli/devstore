import { env } from "@/env"

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPath = '/api'
  const url = new URL(apiPath.concat(path), baseUrl)

  return fetch(url, init)
}
