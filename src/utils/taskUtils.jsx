// src/utils/taskUtils.js

// Named export for adding a task
export function addTask(tasks, newTask) {
  return [...tasks, newTask]; // Return a new array with the new task added
}

// Named export for removing a task
export function removeTask(tasks, index) {
  return tasks.filter((_, i) => i !== index); // Filter out the task to be removed
}
