import React, { useState }  from 'react';

const Counter = () => {
    const [count, setCount] = useState(5);

    return (
        <div>
            <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
        </div>
    );
};

export default Counter;