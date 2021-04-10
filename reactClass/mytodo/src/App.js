import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';
import useFetch from './useFetch.js';
import Header from './Header';
import Column from './column';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, 'http://localhost:3000/todo.json');

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {'task':newTodo, 'id': ++todos.length, 'complete': todos.complete}]);
  }

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
  
    setTodos(updateTodos);
  }

  useEffect(() => {
    // console.log("새로운 내용이 렌더되었습니다.", todos);g
  }, [todos]);


  return (
    <div className="App">
      <Header todos={todos}/>
      <div className="Columns">
      <Column/>
      <Column/>
      <Column/>
      </div>
    </div>
  )
}

export default App;
