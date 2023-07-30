- The Basics of Vue.js
	- Declarative framework - look at a vanilla set up vs a Vue set up
	- It's a progressive framework - you can add Vue gradually to your application
	- It's only responsible for the Vue but there are suggestions for other parts
	- Start up a new project with `npm init vue@latest`
	- Single File Components - we'll look at the these more but effectively, we've got .vue files that have the template, JS and CSS in one file
	- script setup tag - Vue 3 has added something called the composition API which is the way we'll be coding, it means we can write JS
	- Vue instance and root component
	- Interpolation
	- Vue directives - we'll be exploring these more through the course of the next few days but high level
		- v-bind: Bind one or more attributes to an expression.
		```
    <p v-bind:title="message">Hover over me</p>
		```
		- v-if - condtionally render a block
		```
    <p v-if="showMessage">Hello, Vue!</p>
		```
		- v-else - pair with v-if to do the other case
		```vue 
    <p v-if="showMessage">Hello, Vue!</p>
		<p v-else>Goodbye, Vue!</p>
		```
		- v-show - similar to v-if but it toggles the display property so it exists in the DOM even when it's not visible
		```vue
    <p v-show="showMessage">Hello, Vue!</p>
		```
		- v-for - used to render a list of items - we'll look at this one more in the next section
		```vue
		<li v-for="item in items">{{ item }}</li>
		```
		- v-on - listen to DOM events and run some code when it's been triggered
		```vue
		<button v-on:click="counter += 1">Add 1</button>
		```
		- Practice lab 1

