import { storeToRefs } from "pinia"
import { useUserStore } from "@calm1205/vue-lib/stores"

export function useExtendedUserStore() {
  const userStore = useUserStore()

  const isGuest = () => {
    return userStore.user?.id === "guest"
  }

  return {
    ...storeToRefs(userStore),
    ...userStore,
    isGuest,
  }
}
