const strings = ["a", "b", "c", "d"];

// 4 * 4 = 16 bytes of storage
console.log(strings[2]);

// push - add last
strings.push("e"); // O(1)

// pop - remove last element
strings.pop();
strings.pop(); // O(1)

// unshift - add element to first
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

console.log(strings);
