<script setup>
import { ref,computed, watch } from "vue"

const counter = ref(0)

const result = computed(() => {
  if(counter.value < 37) {
    return "Not there yet!"
  } else if (counter.value === 37) {
    return "Spot on!"
  } else {
    return "Too much!"
  }
})

function increaseCounter(number) {
  counter.value = counter.value + number
}

watch(result, () => {
  setTimeout(() => {
    counter.value = 0
  }, 2000)
})

</script>

<template>
<header>
      <h1>Reactivity in Action</h1>
    </header>
    <section id="assignment">
      <button @click="increaseCounter(5)">Add 5</button>
      <button @click="increaseCounter(1)">Add 1</button>
      <!-- 1) Connect the buttons and calculate a value (a number) -->
      <!-- Show "Not there yet" until you reach a result of exactly 37 -->
      <!-- Show "Too much!" if the result is greater than 37 -->
      <p>Result: {{ counter }} - {{ result }}</p>
      <!-- 2) Watch for changes in "result" and reset the value of the counter to 0 after 5 seconds -->
    </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #1b995e;
  color: white;
  text-align: center;
}

#assignment {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

#assignment h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}

#assignment p {
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
  margin: 0.5rem;
}

#assignment input {
  font: inherit;
  border: 1px solid #ccc;
}

#assignment input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#assignment button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#assignment button:hover,
#assignment button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>
