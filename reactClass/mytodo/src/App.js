import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Column from './column';


const App = () => {
  const [columnList, setColumnList] = useState();
   
  const addColumn = () => {

  }

  return (
    <div className="App">
      <Header />
      <div className="Columns">
      <Column/>
      <Column/>
      <Column/>
      </div>
    </div>
  )
}

export default App;
