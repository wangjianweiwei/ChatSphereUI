<script setup>
import {useRouter} from 'vue-router';

import {logoutApi} from "../request/services.js";
import {UserInfoStore} from "../store/useTokenStore.js";

const userInfoStore = UserInfoStore()
const router = useRouter()

const Logout = async () => {
  await logoutApi()
  userInfoStore.clear()
  await router.push("/login")

}

</script>

<template>
  <div>
    Home
    <el-button @click="Logout">退出</el-button>
  </div>
</template>

<style scoped>

</style>