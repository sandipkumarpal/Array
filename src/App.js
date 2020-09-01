import React from "react";
import "./styles.css";

// 1

const array1 = ["a", "b", "c", "dd", "e"];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 1, 4));

// console.log(array1.copyWithin(1, 3));

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
