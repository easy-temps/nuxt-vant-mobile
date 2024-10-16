import type { RouteLocationNormalized } from 'vue-router'
import useKeepalive from '~/composables/keepalive'

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
  if (to.meta && to.meta.keepalive)
    useKeepalive().addRoute(to)
})
