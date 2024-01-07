import { useState, useEffect } from 'react';

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    document.title = `Count is ${count} ${color} Size: ${width} ny ${height}`;
    return () => {
      // cleanup
    };
  }, [count, color, width, height]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('ADD EL');
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
      console.log('REM EL');
    };
  }, []);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === 'green' ? 'red' : 'green'));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default UseEffectDemo;
