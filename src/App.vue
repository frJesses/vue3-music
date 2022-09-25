<template>
  <img alt="Vue logo" src="./assets/logo.png" class="img" />
  <HelloWorld />
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld";
import useStore from "./store";
const { home } = useStore();
console.log(home.counter, "store");
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .img {
    width: 200px;
    height: 300px;
  }
}
</style>
