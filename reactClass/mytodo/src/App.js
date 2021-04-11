import React, { useState } from 'react';
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
      </div>
    </div>
  )
}

export default App;
