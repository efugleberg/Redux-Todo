import React from 'react';
import './App.css';
import AddToDo from './containers/AddTodo'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <TodoList />
      <AddToDo />

    </div>
  );
}

export default App;