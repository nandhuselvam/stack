import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { addTodo, completeTodo, deleteTodo } from './features/todos/todosSlice';

function App() {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo({
      id: Date.now(),
      text: task,
      completed: false,
    }));
    setTask('');
  }

  

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Todo List</h1>
        <form onSubmit={handleAddTodo}>
          <input type='text' value={task} onChange={(e) => { setTask(e.target.value) }} placeholder='Add a new task'></input>
          <button type='submit'>Add</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
              <button onClick={() => { dispatch(completeTodo(todo.id)) }}>Complete</button>
              <button onClick={() => { dispatch(deleteTodo(todo.id)) }}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App