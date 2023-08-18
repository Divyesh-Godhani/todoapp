import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    const removetask = window.confirm('Are you Sure Remove This Task ?');
    if(removetask){
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    }
  };
  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Todo App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{todo}</span>
            <button className="btn btn-danger" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}