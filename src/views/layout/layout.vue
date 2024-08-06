<template>
  <div class="layout">
    counter: {{ counterStore.counter }} - {{ counterStore.doubleCounter }}
  </div>
</template>

<script setup>
import useCounterStore from '';
const counterStore = useCounterStore();

</script>

<style scoped lang="less">
@import url('./layout.less')
</style>
