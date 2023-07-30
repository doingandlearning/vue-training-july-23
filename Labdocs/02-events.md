**Practice Lab 2: Event Handling and Interaction**

In this exercise, we are going to focus on handling events in Vue. 

**Starting Code**

Please use the initial code provided. It sets up a Vue application with three main tasks. 

Navigate to student/02-events, run `npm install` and `npm run dev`. Check that you can see the app running.

There are three tasks in the App.vue.

**Task 1**: Show an alert when the button is clicked.

**Task 2**: Register the user input on "keydown" and output it in the paragraph.

**Task 3**: Repeat task 2 but only output the entered value if the ENTER key was pressed.

You can try doing them without instructions but if you'd like some instructions here you go.

**Instructions**

1. In the script setup block, create a function named `showAlert` that uses `alert()` to display a message when called.

2. Create two reactive variables `text` and `confirmedText` using `ref` from Vue. Set their initial value as an empty string.

3. Create a function named `updateText` that takes an `event` as a parameter. Inside this function, update the `text` variable with the current value of the input field, which can be accessed using `event.target.value`.

4. Similarly, create another function named `updateConfirmedText` that also takes an `event` as a parameter. This function should update the `confirmedText` variable with the current value of the input field.

5. Now, you need to connect these functions to the DOM. For the button, bind the click event to the `showAlert` function using the `v-on:click` or `@click` shorthand directive.

6. For the first input field, bind the keydown event to the `updateText` function. Use the `v-on:keydown` or `@keydown` shorthand directive.

7. For the second input field, bind the keydown event to the `updateConfirmedText` function but this time, make sure the function only gets called when the ENTER key is pressed. You can achieve this using the `.enter` modifier on the keydown event like so: `v-on:keydown.enter`.

8. Lastly, update the paragraphs to display the current values of `text` and `confirmedText`.

**If Time Allows**

- Explore different Vue event modifiers like `.stop`, `.prevent`, `.once`, and key modifiers. Modify the existing code to use these and see how they change the behavior.

- Use Vue Devtools to inspect the changes to the reactive variables `text` and `confirmedText`.

- Try to add some more elements to the interface and bind different events to them. For example, you could add a form and handle its submit event.

**Note**: Remember to use `npm run dev` to start your development server and see your changes live in the browser. Also, use `npm run build` to bundle your application for production.