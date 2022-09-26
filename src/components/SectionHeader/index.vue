<template>
	<div class="section-header">
		<div class="header-left">
      <slot name="left"></slot>
    </div>
		<div class="header-right">
      <slot name="right"></slot>
    </div>
	</div>
</template>

<script setup>
const name = '123'
console.log(name)
</script>

<style lang="less" scoped>
  .section-header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #c20c0c;
    align-items: center;
  }
</style>
