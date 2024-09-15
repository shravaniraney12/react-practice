// src/components/App.js
import React, { useState } from 'react';
import { addTask, removeTask } from '../utils/taskUtils';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]); // To track completed tasks

  // Function to add a task
  const handleAddTask = () => {
    if (input.trim()) {
      setTasks(addTask(tasks, input));
      setInput(''); // Clear input field
    }
  };

  // Function to remove a task
  const handleRemoveTask = (index) => {
    setTasks(removeTask(tasks, index));
  };

  // Function to mark/unmark a task as completed
  const toggleTaskCompletion = (index) => {
    if (completedTasks.includes(index)) {
      // If the task is already completed, uncheck it
      setCompletedTasks(completedTasks.filter((i) => i !== index));
    } else {
      // Mark it as completed
      setCompletedTasks([...completedTasks, index]);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={completedTasks.includes(index)} // Check if task is completed
              onChange={() => toggleTaskCompletion(index)} // Toggle task completion
            />
            <span
              style={{
                textDecoration: completedTasks.includes(index) ? 'line-through' : 'none',
              }}
            >
              {task}
            </span>
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
