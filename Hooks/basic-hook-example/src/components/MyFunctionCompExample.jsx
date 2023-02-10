import React from "react";

function MyFunctionCompExample(props) {

  const count = 0

  return (
      <div>
        <p>You Clicked {count} times!</p>
        <button onClick={clickHandler}>Click Me</button>
      </div>
  )
}

const clickHandler = (e) => {
  console.log("Click!")
}

export default MyFunctionCompExample
