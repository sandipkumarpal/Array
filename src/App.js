import React from "react";
import "./styles.css";
// 1
const array = Array.from("Sandip");
console.log({ array });

// 2
const set = new Set(["foo", "bar", "baz", "foo"]);

console.log(Array.from(set));

// 3

function f() {
  return Array.from(arguments);
}
console.log(f(1, 2, 3));

// 4
const mapArr = Array.from([1, 2, 3], (x) => x * x);
console.log(mapArr);

// 5
const mapArr2 = Array.from({ length: 5 }, (v, i) => ({
  [i]: "Sandip " + i
}));
console.log(mapArr2);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
