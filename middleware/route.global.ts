import useKeepalive from '~/composables/keepalive'

export default defineNuxtRouteMiddleware((to) => {
  if (to.meta && to.meta.keepalive)
    useKeepalive().addRoute(to)
})
