//Create a function that reverses a string:
//'Hi My name is Andrei' should be:
//'ierdnA si eman yM iH'

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => str.split("").reverse().join("");

const reverse4 = (str) => [...str].split("").reverse().join("");

console.log(reverse("Hi My name is Andrei"));
console.log(reverse2("Hi My name is Andrei"));
console.log(reverse3("Hi My name is Andrei"));
