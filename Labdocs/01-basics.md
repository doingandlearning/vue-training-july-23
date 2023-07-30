**Practice Lab 1: Crafting Your First Vue App**

This lab will guide you in creating your first Vue application, '01-basics', using Vue's latest features. You'll apply what you've learned about creating Vue instances, interpolation, v-if and v-show, and build a fun personal page.

**Exercise 1: Initiate your Project**

1. Open your terminal or command prompt, navigate to the directory where you want to create your new Vue project. 
2. Run the command `npm init vue@latest` to initiate a new Vue application. Name your new application '01-basics'. 
3. Once the setup is done, navigate into your new project folder with `cd 01-basics`. 
4. Follow the rest of the instructions on screen and `npm install` and `npm run dev`. You should have a link in your terminal that you can use to view the application.

**Exercise 2: Customize Your Vue Component**

1. Find 'App.vue' in the 'src' folder. This is the main component of your application. Remove the existing code inside the `<template></template>` tags in 'App.vue'.
2. Copy and paste the provided starting template code into your `App.vue` file.
3. Inside the `<script setup></script>` tag, start by declaring the 'name' and 'age' variables.
4. Proceed to fill in the placeholders within the template using Vue's interpolation syntax `{{ }}`. 
5. Use the `v-bind` directive to bind the 'name' variable to the value attribute of the input field.
6. Finally, replace the placeholders for the image URL with an actual URL of an image you found on the internet.

This lab guides you through initializing your Vue project using the Vue CLI, creating your first Vue instance, and applying data binding in a real-world context. It's a simple yet practical exercise to get you familiar with Vue.js. The finished application will display your name, age, a random number, and an image, all rendered dynamically with Vue.js.

Here is the starting code:

```html
<section>
  <!-- 1) Output your name -->
  <h2>YOUR NAME</h2>
  <!-- 2) Output your age -->
  <p>YOUR AGE</p>
  <!-- 3) Output your age + 5 -->
  <p>YOUR AGE in 5 years</p>
  <!-- 4) Output a random number (0 to 1) -->
  <p>Favorite Number: RANDOM NUMBER BETWEEN 0 AND 1</p>
  <div>
    <!-- 5) Display some image you found via Google -->
    <img src="SOME IMAGE URL" />
  </div>
  <!-- 6) Prepopulate the input field with your name via the "value" attribute -->
  <input type="text" />
</section>
```

And the provided CSS:

```css
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

section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #970076;
  margin: 0 0 1rem 0;
}

p {
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #970076;
  padding: 0.5rem;
  color: white;
  border-radius: 25px;
  margin: 4px;
}

input {
  font: inherit;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

img {
  width: 100%;
}
</style>
```

Your task is to complete the above template by replacing the placeholders with dynamic Vue code. Good luck!