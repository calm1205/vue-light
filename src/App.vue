<script setup lang="ts">
import { HelloWorld } from "@calm1205/vue-lib/components"
import { useUserStore } from "@calm1205/vue-lib/stores"
import { fetchUser as fetchUserApi } from "./lib/user"

const userStore = useUserStore()

const onClick = async () => {
  await userStore.fetchUser(fetchUserApi)
  console.log(userStore.user?.id)
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
