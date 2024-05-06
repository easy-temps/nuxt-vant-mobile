import { defineStore } from 'pinia'
import type { RouteLocationNormalized, RouteRecordName } from 'vue-router'

const useKeepalive = defineStore('keepalive', () => {
  const routeCaches = ref<RouteRecordName[]>([])

  const addRoute = (route: RouteLocationNormalized) => {
    if (!route.name)
      return

    if (routeCaches.value.includes(route.name))
      return

    if (route?.meta?.keepalive)
      routeCaches.value.push(route.name)
  }

  return {
    routeCaches,
    addRoute,
  }
})

export default useKeepalive
