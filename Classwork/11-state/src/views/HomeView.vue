<script setup>
import { useCounterStore } from "@/stores/counter"

const store = useCounterStore()

</script>

<template>
  <h1>Counter</h1>

  <p>Current count: {{  store.count }}</p>
  <p>Double that is: {{ store.doubleCount }}</p>
  <button @click="store.increment">Add 1</button>
</template>
