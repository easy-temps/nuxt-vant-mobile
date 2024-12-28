import type { $Fetch } from 'ofetch'

import { useRuntimeConfig } from '#app'
import { ofetch } from 'ofetch'

type HttpStatusErrorHandler = (message: string, statusCode: number) => void
let httpStatusErrorHandler: HttpStatusErrorHandler

let http: $Fetch

export function setupHttp() {
  if (http)
    return http

  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase as string

  http = ofetch.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    async onRequest({ options }) {
      const token = localStorage.getItem('token')

      options.headers = {
        ...options.headers,
        ...(token && { Authorization: `Bearer ${token}` }),
      }
    },
    async onResponseError({ response }) {
      const { message } = response._data
      if (Array.isArray(message)) {
        message.forEach((item) => {
          httpStatusErrorHandler?.(item, response.status)
        })
      }
      else {
        httpStatusErrorHandler?.(message, response.status)
      }
      return Promise.reject(response._data)
    },
    retry: 3,
    retryDelay: 1000,
  })
}

export function injectHttpStatusErrorHandler(handler: HttpStatusErrorHandler) {
  httpStatusErrorHandler = handler
}

export function getHttp() {
  if (!http) {
    throw new Error('HTTP client not initialized. Call setupHttp first.')
  }
  return http
}
