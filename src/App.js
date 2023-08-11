import React, { useState } from 'react';
import ColorBlock from './colorBlock';
import ColorForm from './colorForm';
import logo from './logo.svg';
import './App.css';

function App() {
  const [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color}></ColorBlock>
    )
  })
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
 {colorMap}
 <ColorForm addColor={addColor}></ColorForm>
    </div>
  );
}

export default App;
