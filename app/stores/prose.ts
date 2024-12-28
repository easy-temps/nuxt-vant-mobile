import { defineStore } from 'pinia'
import { getProse } from '~/api/prose'

export const useProseStore = defineStore(
  'prose',
  () => {
    const prose = ref<string>('')

    function initProse(val: string) {
      if (!prose.value) {
        prose.value = ''
      }

      prose.value = val
    }

    function clearProse() {
      prose.value = ''
    }

    async function fetchProse() {
      const res = await getProse()
      initProse(res.result)
    }

    return {
      prose,
      initProse,
      clearProse,
      fetchProse,
    }
  },
)
