
import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Child from './Child';


const App = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const v = useSelector((state) => state.cubedValue)
  
  const handleSquareClick = () => {
    dispatch({ type: 'SQUARE', square: parseInt(value) ** 2 });
  };

  return (
    <>
      <h1>App Component</h1>
      <h2>{v}</h2>
      <input type='number' value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleSquareClick}>Square</button>
      <Child />
    </>
  );
};

export default App;


