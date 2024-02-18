import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (taskName.trim() !== '') {
      setTodos([...todos, { id: Date.now(), taskName, description, status: 'not completed' }]);
      setTaskName('');
      setDescription('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodoStatus = (id, newStatus) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: newStatus };
      }
      return todo;
    }));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.status === 'completed';
    } else {
      return todo.status === 'not completed';
    }
  });

  return (
    <div>
      <h1>My  todo</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Todo Name..."
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description..."
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
      <div>
        {filteredTodos.map(todo => (
          <div key={todo.id} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
            <h3>{todo.taskName}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => {
              const newStatus = prompt('Enter new status (completed or not completed):', todo.status);
              if (newStatus !== null && (newStatus === 'completed' || newStatus === 'not completed')) {
                updateTodoStatus(todo.id, newStatus);
              }
            }}>Edit Status</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
