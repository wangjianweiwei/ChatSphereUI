<script setup>

import {onMounted, ref} from "vue";

const isDark = ref(true)

onMounted(async () => {
  isDark.value = JSON.parse(window.localStorage.getItem("isDark")) || true
  toggleDark()
})

const toggleDark = () => {
  window.localStorage.setItem("isDark", JSON.stringify(isDark.value))
  const html = document.querySelector('html')
  if (html) {
    if (isDark.value) {
      html.classList.remove("light");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }
  }
  return true
}
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
