import React from "react";
import "./styles.css";

// 1
console.log(Array.of(1)); // [1]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(undefined)); // [undefined]4
console.log(Array(1));

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
