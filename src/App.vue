<template>
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
