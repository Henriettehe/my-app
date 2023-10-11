import React, { useState } from 'react';

//Kilder: fullstækk.no og ChatGpt for eksempel på et komponent å teste: 

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
