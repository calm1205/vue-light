<script setup lang="ts">
import { HelloWorld } from "@calm1205/vue-lib/components"
import { useUserStore } from "@calm1205/vue-lib/stores"
import { fetchUser as fetchUserApi } from "./lib/user"
import { useTenantStore } from "./stores/tenant"
import { useUserStore as useLocalUserStore } from "./stores/user"
import { useExtendedUserStore } from "./stores/extendUser"

const userStore = useUserStore()
const tenantStore = useTenantStore()
const localUserStore = useLocalUserStore()
const extendedUserStore = useExtendedUserStore()

const onClick = async () => {
  await userStore.fetchUser(fetchUserApi)
  tenantStore.setTenant("1", "Tenant 1")
  localUserStore.setUser({ id: "1", name: "John Doe", email: "john.doe@example.com" })

  console.log(userStore.user?.id)
  console.log(tenantStore.tenantId)
  console.log(localUserStore.user?.id)
  await extendedUserStore.fetchUser(fetchUserApi)
  console.log(extendedUserStore.isGuest())
}
</script>

<template>
  <div class="p-2xl flex items-center justify-center">
    <img src="/vite.svg" class="logo" alt="Vite logo" @click="onClick" />
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
