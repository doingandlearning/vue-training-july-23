**Practice Lab 4: Styling in Vue**

In this lab, we'll play with Vue's dynamic styling capabilities.

**Starting Code**

The initial code provided sets up a bare-bones Vue application with no functionality. 

You need to navigate to `student/04-styling`, then run `npm install` and `npm run dev`. Ensure that the app is visible in your browser.

The tasks are outlined in the `App.vue` file.

**Task 1**: Fetch user input and apply it as a CSS class to the paragraph.

**Task 2**: Toggle between the "visible" and "hidden" classes when the button is clicked, showing or hiding the paragraph accordingly.

**Task 3**: Add dynamic inline styling to another paragraph, allowing the user to change the background color.

**Instructions**

1. Import `ref` from Vue in the script setup block. Define `userClass`, `visible`, and `color` as reactive variables using `ref`. Initialize `userClass` and `color` as empty strings and `visible` as true.

2. Implement a `toggleVisible` function that inverts the value of `visible`.

3. Bind the value of the first input field to `userClass` using the `v-model` directive.

4. Bind the class attribute of the first paragraph to `userClass`, `visible`, and `!visible`. Use an array to apply multiple classes. Also, create an object for `visible` and `!visible` to conditionally apply the "visible" and "hidden" classes.

5. Bind the click event of the button to the `toggleVisible` function using the `@click` directive.

6. Bind the value of the second input field to `color` using the `v-model` directive.

7. Bind the style attribute of the second paragraph to an object that sets the `backgroundColor` to `color`.

**If Time Allows**

- Experiment with more CSS classes: Add more classes in the style section and let the user apply them.

- Use computed properties: Instead of directly using the reactive variables, create computed properties that depend on them and use these properties in the template.

- Apply more inline styles: Allow the user to enter more CSS properties and apply them to the paragraph.

**Note**: Remember to use `npm run dev` to start your development server and see your changes in the browser. Also, don't forget to use `npm run build` when you're ready to bundle your application for production.