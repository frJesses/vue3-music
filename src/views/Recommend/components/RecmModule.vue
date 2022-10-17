<template>
  <div class="recm-wrapper">
    <slot name="nav"></slot>
    <div class="recm-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.recm-content{
  display: flow-root;
  margin-top: 20px;
  margin-bottom: 35px;
}
</style>
