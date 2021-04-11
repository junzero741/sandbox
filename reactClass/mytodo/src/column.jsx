import React, { useState, useEffect } from 'react';
import List from './List.jsx';
import useFetch from './useFetch.js';



const Column = () => {
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
    console.log("새로운 내용이 렌더되었습니다.");
  }, [todos]);


  return (
    <div className="Column">
    <div className="countInfo"> {todos.length}개 </div>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>

      <List todos={todos} loading={loading} changeTodoStatus = {changeTodoStatus} />
    </div>
  )
}

export default Column;
