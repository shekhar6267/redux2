
import React from 'react';
import { useDispatch , useSelector } from 'react-redux';

const Child = () => { 
  const dispatch = useDispatch();
  const v = useSelector((state) => state.squaredValue)
 

  const handleCubeClick = () => {
    dispatch({ type: 'CUBE', cube: parseInt(v) ** 3 });
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type='number' value={v} /> 
      <button onClick={handleCubeClick}>Cube</button>
      
    </div>
  );
};

export default Child;

