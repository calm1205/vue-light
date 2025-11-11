import { defineStore } from "pinia"

interface User {
  id: string
  name: string
  email: string
}
interface UserState {
  user: User | null
}

// package側と同じ名前だと競合する
export const useUserStore = defineStore("localUser", {
  state: (): UserState => ({
    user: null,
  }),
  actions: {
    setUser(user: User) {
      this.user = user
    },
    async fetchUser(apiClient: () => Promise<{ data: User }>): Promise<void> {
      const { data } = await apiClient()
      this.user = data
    },
    async logout(apiClient: () => Promise<void>): Promise<void> {
      await apiClient()
      this.user = null
    },
  },
})
