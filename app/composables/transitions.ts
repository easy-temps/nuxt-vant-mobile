import { defineStore } from 'pinia'

const useRouteTransitionName = defineStore('route-transition-name', () => {
  const routeTransitionName = ref('')

  const setName = (name: string) => {
    routeTransitionName.value = name
  }

  return {
    routeTransitionName,
    setName,
  }
})

export default useRouteTransitionName
