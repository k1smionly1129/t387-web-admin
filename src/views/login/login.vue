<template>
  <div class="login">login: {{ counterStore.setCounter(input_text) }}</div>
  <input type="number" v-model="input_text" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useCounterStore from "@/store/counter/counter";

const counterStore = useCounterStore();

const input_text = ref();
</script>

<style scoped lang="less">
.login {
}
</style>
