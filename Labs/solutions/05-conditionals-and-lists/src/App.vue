<script setup>
import {ref } from "vue"

const tasks = ref(['Learn Vue'])
const newTask = ref("")
const visible = ref(true)
function addTask() {
  tasks.value.push(newTask.value)
  newTask.value = ""
}

</script>

<template>
    <header>
      <h1>Vue Lists and Conditional Content</h1>
    </header>
    <section id="assignment">
      <h2>Assignment</h2>
      <!-- 1) Add code to manage a list of tasks in a Vue app -->
      <!-- When clicking "Add Task" a new task with the entered text should be added -->
      <input type="text" v-model="newTask">
      <button @click="addTask">Add Task</button>
      <ul>
        <!-- 2) Output the list of tasks here -->
        <li v-for="task in tasks" v-if="visible">{{ task }}</li>
      </ul>
      <!-- 3) When the below button is pressed, the list should be shown or hidden -->
      <!-- BONUS: Also update the button caption -->
      <button @click="visible = false" v-if="visible">Hide List</button>
      <button @click="visible = true" v-else>Show List</button>
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

#assignment ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

#assignment li {
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
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
