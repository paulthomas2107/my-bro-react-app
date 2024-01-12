import { useEffect, useRef } from 'react';

function UseRefDemo() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log('Rendered ');
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = 'yellow';
    inputRef2.current.style.backgroundColor = 'white';
    inputRef3.current.style.backgroundColor = 'white';
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = 'blue';
    inputRef1.current.style.backgroundColor = 'white';
    inputRef3.current.style.backgroundColor = 'white';
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = 'pink';
    inputRef1.current.style.backgroundColor = 'white';
    inputRef2.current.style.backgroundColor = 'white';
  }

  return (
    <div>
      <button onClick={handleClick1}>Click Me 1 !</button>;
      <input ref={inputRef1} />
      <button onClick={handleClick2}>Click Me 2 !</button>;
      <input ref={inputRef2} />
      <button onClick={handleClick3}>Click Me 3 !</button>;
      <input ref={inputRef3} />
    </div>
  );
}

export default UseRefDemo;
