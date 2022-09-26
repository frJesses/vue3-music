<template>
<<<<<<< HEAD
  <router-view></router-view>
</template>

<script setup>
import useStore from "./store";
const { home } = useStore();
console.log(home.counter, "store");
document.title = "网易云音乐";
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
}
</style>
=======
  <img alt="Vue logo" src="./assets/logo.png" class="img" />
  <SeactionHeader>
    <template #left>
      <div>left</div>
    </template>
    <template #right>
      <div>right</div>
    </template>
  </SeactionHeader>
</template>

<script setup>
import SeactionHeader from '@/components/SectionHeader'
</script>

<style lang="less"></style>
>>>>>>> dev
