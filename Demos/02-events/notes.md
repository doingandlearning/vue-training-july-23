- Understanding Vue.js Event Binding
	- We want dynamic and reactive pages
	- Regular JS we'd use document.querySelector, etc
	- We can declare the final result
	- The v-on directive
		- We can listen to anything like click, mouse-enter
		- We need to use ref's for any value that we want to trigger an update to the view when it changes
		- We can do this in line
	- Functions within Vue
		- We should probably use functions to capture this functionality.
		- In the script setup tag we can just write normal functions and they'll be available.
		- It's not the ref value that we need to change, it's the value, so we need to take that into account. The template knows that which is why we didn't need to do anything with that before 
	- Working with event arguments
	  - Add and Subtract 5 - we could update the functions and hard code
		- Or we could accept a more dynamic parameter
		- This makes it more reusable and we change the parameter as we update the label
	- Using the Native Event Object
		- Let's add an input of type text and have a paragraph below that will show it:
		```vue
		<input type="text">
		<p>Your name: {{ }}</p>
		```
		- We could listen to the keydown or keyup but the input is probably the best to use
		- The default event object will be passed to our function automatically
		- This is vanilla JS - event.target.value
		- Only the reactive bits are rerendered - see in the dev tools
		- What if we want to set a default last name?
		- You can use the $event variable to explicitly pass in the default event
	- Exploring Event Modifiers
		- Say we had a form with a button - when we submit the page will reload
		- The browser default is to refresh - but we can modify the event
		- `v-on:submit` still refreshes the page
		- Can do event.preventDefault() - this is a browser provided behaviour
		- Vue has a nicer way - `v-on:submit.prevent`
		- Click modifier: Say we only wanted to only want to have a button work when we right click `v-on:click.right` (alts are left, middle)
		- Key modifier: Have another confirm name which will only update when you press enter`v-on:keyup
	- Locing Content with v-once
		- Vary rarely need this - maybe you only want to have the starting value and have the updates there as well
		- `v-once`
	- Options API - methods




```css
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
```

Initial template

```vue
<header>
	<h1>Vue Events</h1>
</header>
<section id="events">
	<h2>Events in Action</h2>
	<button>Add</button>
	<button>Reduce</button>
	<p>Result: {{ counter }}</p>
</section>
```

Initial script