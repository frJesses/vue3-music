import { useRouter, useRoute } from 'vue-router'

export function useRouterInfo() {
  const router = useRouter()
  const route = useRoute()
  return {
    router,
    route
  }
}
