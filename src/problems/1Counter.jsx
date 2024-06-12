import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    //remember local storage stores all values as strings
    if (storedCount) {
      console.log(storedCount);
      setCount(parseInt(storedCount, 10));
    }
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          localStorage.setItem("count", newCount);
        }}
      >
        Count: {count}
      </button>
    </div>
  );
};

export default Counter;
