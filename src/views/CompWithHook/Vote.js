import React, { useState } from "react";
import { Navigate } from "react-router-dom";
//import './Login.scss';

function Vote () {
  /* useState(0) --> count is number.
    useState("") --> count is string.
  */
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Voted: {count}</p>
      <button  onClick={handleClick} >click to vote </button>
      <button  onClick={handleClick} >click other to vote </button>
    </div>
  );
}

export default Vote;
