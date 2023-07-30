- It's often necessary to update a value like we did in the last section
	- v-model is a shortcut for v-bind:value and v-on:input
	- This is called two way binding - we are listening to an input event and we are writing the value as well
	- This makes getting user input and updates more straight forward
- We know about DOM interaction - mounting Vue, templates and dom binding
- We also know now about Event Handling
- We're going to look at more advanced reactivity
- computed values
	- we could add the last name using a specific method:
```js
function outputFullName(lastName) {
  if(name.value === "") {
    return ""
  }
  return `${name.value} ${lastName}`
}
```
  - Vue knows where it needs to update - the outputFullname method will be updated each time something on the page is called as it doesn't know what to update.
	- We could use a watcher here but if we had two inputs then we'd need to have both of them handled seperately whereas a computer property handles both if they are referenced
	- Watchers are powerful for things like, we want to reset the counter if it's more than 50
	- Also, http requests adn timers and other things if certain values are exceeded

- methods vs computed vs watchers
  - methods: use with event or data binding. This will be executed on every rerender of the component. Use for events or data that needs to be evaluated all the time
	- computed: just with data binding. They will only be re-evaluated if the referenced values are changed. Use for data that depends on other data
	- watch: not used directly in the template. Allows you to run any code in reaction to some changed data. Use for any non-data update you want to make. Probably the one of the three you'll use the least.

- quick short cuts:
	- v-on is used quite a bit - shorthand - @
	- v-bind also - v-bind:value can be :value
	- You can use the shorter version or the longer version but try to be consistent
	

Initial SFC:
```vue
<script setup>
import { ref } from "vue"

const counter = ref(0)

const name = ref("")

function setName(event, lastName) {
  name.value = event.target.value + ' ' + lastName;
}
function add(num) {
  counter.value = counter.value + num;
}
function reduce(num) {
  counter.value = counter.value - num;
}
</script>

<template>
    <header>
      <h1>Vue Events</h1>
    </header>
    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="add(10)">Add 10</button>
      <button v-on:click="reduce(5)">Subtract 5</button>
      <p>Result: {{ counter }}</p>
      <input type="text" v-on:input="setName($event, 'Cunningham')">
      <p>Your Name: {{ name }}</p>
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
  margin: 0.5rem;
  border-radius: 25px;
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
```