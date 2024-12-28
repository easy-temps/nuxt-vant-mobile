import { getHttp } from './http'

export async function getProse() {
  const http = getHttp()
  return await http('/api/prose', {
    method: 'GET',
  })
}
