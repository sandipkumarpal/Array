# Array

Created with CodeSandbox

## Array.prototype.concat

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```bash
concat()

const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

```

## Array.prototype.copyWithin()

The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

```bash

arr.copyWithin(target[, start[, end]])


const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

```

## Array.prototype.entries()

The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```bash

array.entries()

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

```
