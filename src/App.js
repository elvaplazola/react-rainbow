import React, { useState } from 'react';
import ColorBlock from './colorBlock';
import logo from './logo.svg';
import './App.css';

function App() {
  let colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color}></ColorBlock>
    )
  })

  return (
    <div className="App">
 {colorMap}
    </div>
  );
}

export default App;
