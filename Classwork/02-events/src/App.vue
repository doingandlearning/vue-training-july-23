<script setup>
// Composition API
import { ref } from 'vue'

const counter = ref(0)
const name = ref("")
const confirmedName = ref("")

function confirmName(event, lastName) {
  confirmedName.value = event.target.value + " " + lastName
} 

function add(number) {
  counter.value = counter.value + number
}

function subtract() {
  counter.value--
}

function updateName(event, lastName) {
  name.value = event.target.value + " " + lastName
}
function handleSubmit(event) {
  // event.preventDefault()
  console.log("Submitting ... ")
}
const showDiv = ref(true)
</script>

<template>
  <header>
    <h1>Vue Events</h1>
  </header>
  <section id="events">
    <h2>Events in Action</h2>

    <div v-show="showDiv">Now you see me!</div>
    <button v-on:click="showDiv = false">Hide</button>
    <button v-on:click="showDiv = true">Show</button>


    <button v-on:click="add(10)">Add 10</button>
    <button v-on:click.once="add(100)">Add 100 (but only once)</button>
    <button v-on:click.ctrl="subtract()">Reduce</button>
    <p>Result: {{ counter }}</p>

    <input 
      type="text" 
      v-on:input="updateName($event, 'Watson')" 
      v-on:keydown.enter="confirmName($event, 'Watson')" 
    />
    <p v-on:mouseenter="alert('Hey!')">Your name: {{ name }}</p>
    <p>Your confirmed name: {{ confirmedName }}</p>

    

    <form v-on:submit.prevent="handleSubmit">
      <button>Submit</button>
    </form>
    </section>
</template>

<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#events {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#events h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #4fc08d;
  margin: 0 0 1rem 0;
}

#events p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid #4fc08d;
  background-color: #4fc08d;
  color: white;
  padding: 0.5rem;
  border-radius: 25px;
  margin: 0.5rem;
}

#events input {
  font: inherit;
  border: 1px solid #ccc;
}

#events input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#events button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
  margin: 0 1rem;
}

#events button:hover,
#events button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
