**Practice Lab 8: Advanced Component Usage in Vue.js**

In this lab, we'll deepen our understanding of Vue.js components by working with props, custom events, and dynamic components in our Task Manager application.

**Starting Code**

The provided starting code continues from where we left off in the previous lab.

Navigate to `student/03-advanced-component-usage`, then run `npm install` and `npm run dev`. Ensure that the app is visible in your browser.

The tasks are outlined in the `TaskList.vue` and `Task.vue` files.

**Task 1**: Add a button in the Task component to mark a task as completed. Emit a custom event to the TaskList component to update the task's status.

**Task 2**: In the TaskList component, listen for the custom event and update the task's status accordingly.

**Task 3**: Create a new component to show a summary of tasks. Dynamically load this component when a button is clicked.

**Instructions**

1. In the `Task.vue` file, add a button that, when clicked, emits a custom event 'completeTask' with the task id.

2. In the `TaskList.vue` file, listen for the 'completeTask' event in the Task component using the `v-on` directive or its shorthand `@`. When this event is caught, update the corresponding task's status to completed.

3. Create a new `TaskSummary.vue` component that receives the `tasks` array as a prop and displays the total number of tasks and the number of completed tasks.

4. In the `TaskList.vue` file, add a button "Show Summary". When this button is clicked, dynamically load the `TaskSummary.vue` component using the `v-if` directive and pass the `tasks` array as a prop.

**If Time Allows**

- **Remove Task**: Add a button in the `Task.vue` component to remove a task. Emit a custom event to the `TaskList.vue` component and remove the task from the `tasks` array.
- **Edit Task**: Add a feature that allows editing a task. You could use `v-model` to create two-way binding for the task's title and a "Save" button to update the title.
- **Lazy Loading**: Refactor the dynamic loading of the `TaskSummary.vue` component to use Vue's async components for better performance.

**Note**: Remember to use `npm run dev` to start your development server and see your changes in the browser. Also, don't forget to use `npm run build` when you're ready to bundle your application for production.

This lab will help you deepen your understanding of Vue.js components, custom events, and dynamic component loading. Enjoy your coding!