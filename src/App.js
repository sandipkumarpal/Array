import React from "react";
import "./styles.css";

// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays,
// but instead returns a new array.

// 1
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log({ array1, array2, array3 });

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
