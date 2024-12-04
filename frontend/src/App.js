import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Use the improved styling
import { FaTrashAlt, FaPlus, FaCheckCircle } from 'react-icons/fa'; // Import icons

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    if (newTask.trim() === '') return;
    try {
      const response = await axios.post('http://localhost:5000/todos', { task: newTask });
      setTodos([...todos, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      const response = await axios.put(`http://localhost:5000/todos/${id}`, { completed: !completed });
      setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="todo-app">
        <h1>To-Do List</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTodo}>
            <FaPlus />
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <span onClick={() => toggleTodo(todo._id, todo.completed)}>{todo.task}</span>
              <div className="todo-actions">
                <FaCheckCircle
                  className="check-icon"
                  onClick={() => toggleTodo(todo._id, todo.completed)}
                />
                <FaTrashAlt className="delete-icon" onClick={() => deleteTodo(todo._id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
