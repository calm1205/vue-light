import { defineStore } from "pinia"

export const useTenantStore = defineStore("tenant", {
  state: () => ({
    tenantId: null as string | null,
    tenantName: "",
  }),
  getters: {
    isTenantSelected: (state) => !!state.tenantId,
  },
  actions: {
    setTenant(id: string, name: string) {
      this.tenantId = id
      this.tenantName = name
    },
    clearTenant() {
      this.tenantId = null
      this.tenantName = ""
    },
  },
})
