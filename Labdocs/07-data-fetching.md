**Practice Lab 7: Data Fetching, Props Handling, and Computed Properties in Vue.js**

In this lab, we'll enhance our Task Manager application by fetching data from an API, passing it between components using props, and optimizing our application with computed properties.

**Starting Code**

The provided starting code sets up the Task Manager application that we built in the previous lab.

Navigate to `student/02-data-fetching-props-computed`, then run `npm install` and `npm run dev`. Ensure that the app is visible in your browser.

The tasks are outlined in the `TaskList.vue` and `Task.vue` files.

**Task 1**: Fetch tasks from the provided API and display them in your TaskList component.

**Task 2**: Pass the fetched tasks into the Task component using props.

**Task 3**: Implement a computed property to display the total number of tasks and the number of completed tasks.

**Instructions**

1. In the `TaskList.vue` file, use the `<script setup>` syntax to define your component logic. Import `onMounted`, `ref`, `computed` from Vue, and `axios` for making HTTP requests.

2. Define `tasks` as a reactive variable using `ref` and initialize it as an empty array. 

3. Implement an `async` function `fetchTasks` to fetch tasks from the API using `axios`. In the response callback, set the `tasks` value to the fetched data.

4. Use the `onMounted` hook to call the `fetchTasks` function when the component mounts.

5. Use the `v-for` directive to loop over the `tasks` array and render a `Task` component for each task, passing the task data as a prop.

6. Define `totalTasks` and `completedTasks` as computed properties using `computed`. `totalTasks` should calculate and return the total number of tasks, while `completedTasks` should calculate and return the number of completed tasks.

**If Time Allows**

- **Error Handling**: Implement error handling for the API request. In case of an error, display an appropriate message to the user.
- **Loading State**: Implement a loading state that shows a loading spinner or message while the API request is in progress.
- **Filtering Tasks**: Add a feature that filters the tasks based on their completion status. You could have two buttons or tabs, "All Tasks" and "Completed Tasks", and clicking each one filters the displayed tasks accordingly.

**Note**: Remember to use `npm run dev` to start your development server and see your changes in the browser. Also, don't forget to use `npm run build` when you're ready to bundle your application for production.

This lab will help you become comfortable with fetching data from an API, handling props, and working with computed properties in Vue.js using the `<script setup>` syntax. Enjoy your coding!