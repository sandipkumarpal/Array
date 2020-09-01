import React from "react";
import "./styles.css";

// 1
const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next());

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) console.log(index, element);

var a1 = ["a", "b", "c"];
var iterator = a1.entries();

for (let e of iterator) {
  console.log(e);
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
