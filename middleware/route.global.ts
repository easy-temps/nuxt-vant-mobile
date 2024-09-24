import type { RouteLocationNormalized } from '#vue-router'
import useKeepalive from '~/composables/keepalive'
import routeTransitionNameStore from '~/composables/transitions'

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, from) => {
  // KeepAlive
  if (to.meta && to.meta.keepalive)
    useKeepalive().addRoute(to)

  // Set route transition name
  if (!to.meta.level || !from.meta.level)
    return

  if (to.meta.level > from.meta.level)
    routeTransitionNameStore().setName('slide-fadein-left')

  else if (to.meta.level < from.meta.level)
    routeTransitionNameStore().setName('slide-fadein-right')

  else
    routeTransitionNameStore().setName('')
})
