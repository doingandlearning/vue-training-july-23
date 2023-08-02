<script setup>
import { useCounterStore} from "@/stores/counter"
import { useExerciseStore } from "@/stores/exercise"
const store = useCounterStore()
const exerciseStore = useExerciseStore()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Count: {{  store.count }}</p>

    <p>Your latest exercise was {{  exerciseStore.formData.type }}. Keep going!</p>
    <RouterLink to="/form">Go back to form</RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
