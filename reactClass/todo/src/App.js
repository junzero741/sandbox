import React, { useState, useRef } from 'react';
import Header from './Header';
import data from './data.json';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import './App.css';
import Carousel from 'gooyle_carousel';

function App() {
  const carouselRef = useRef();
  const [toDoList, setToDoList] = useState(data);



  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id : toDoList.length + 1, task : userInput, complete: false}];
    setToDoList(copy);
  }


  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  // children, 
  const settings = {
    slideToScroll: 3,
    speed: 500,
    defaultArrow: true,
    defaultPaging: true,
  }


  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle = {handleToggle} handleFilter = {handleFilter} />
      <ToDoForm addTask = {addTask}/>
      <Carousel {...settings}/>
    </div>
  );
}

export default App;
