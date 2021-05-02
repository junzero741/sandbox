import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Column from './column';
import Carousel from 'gooyle_carousel';

const App = () => {
  const [columnList, setColumnList] = useState();
  console.log(Carousel);
  const addColumn = () => {};

  return (
    <div className="App">
      <Header />
      <div className="Columns">
        <Column />
      </div>
    </div>
  );
};

export default App;
