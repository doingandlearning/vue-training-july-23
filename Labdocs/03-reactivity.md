Practice Lab 3: Reactivity and Event Handling in Vue

In this exercise, you'll explore Vue's reactivity system and event handling capabilities.

Starting Code

Utilize the initial code provided as it sets up a basic Vue application with tasks described in comments.

Start by navigating to student/03-reactivity, run npm install and npm run dev. Verify you can see the app running in the browser.

The tasks are outlined in the App.vue.

Task 1: Connect the "Add 5" and "Add 1" buttons and compute a numeric value.

Task 2: Display "Not there yet" until the computed value reaches exactly 37. Show "Too much!" if the result exceeds 37.

Task 3: Implement a watcher on the result and reset it to 0 after 5 seconds whenever it changes.

Instructions

In the script setup block, import ref, computed, and watch from Vue. Create a reactive variable counter using ref and initialize it to 0.

Create a computed property result. This property should return "Not there yet" until the counter reaches 37, "Spot on!" when the counter is 37, and "Too much!" if the counter goes above 37.

Implement a function increaseCounter which takes a number as parameter and adds it to the counter's value.

Set up a watcher on the result computed property. Whenever the result changes, reset the counter value to 0 after 5 seconds.

Connect the buttons to the increaseCounter function using the v-on:click or @click shorthand directive. Pass in the appropriate values (5 for "Add 5" button, 1 for "Add 1" button) as parameters to the function.

Update the paragraph to display the current values of counter and result.

If Time Allows

Experiment with different target values and conditions: Change the target value from 37 to something else or add more conditions and messages for different ranges of values.

Customize the delay: Modify the delay based on the counter's current value instead of always waiting 5 seconds before resetting the counter.

Add more interaction: Add more buttons or inputs to interact with the counter in different ways. You could subtract from the counter or multiply its value.

Note: Ensure to use npm run dev to start your development server and see your changes live in the browser. Also, use npm run build to bundle your application for production.