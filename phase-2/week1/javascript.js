console.log('welcome!');

// this is why we don't like var
console.log(value);
var value = 12;

let variable = 10;
const constant = 2019;

console.log(value);
console.log(variable);
console.log(constant);

value = 13;
variable = 1;

console.log(value);
console.log(variable);

console.log(constant);

console.log("-------------");

console.log(typeof 0);
// expected output: "number"

console.log(typeof 'blubber 12457');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof declaredButUndefinedVariable);
// expected output: "undefined";

let isActive = true;
console.log(typeof isActive);

isActive = 10;
console.log(typeof isActive);

if (isActive) {
    console.log("is active " + isActive);
} else {
    console.log("is not active" + isActive);
}
console.log("-------------");

const name = "Marco";
const age = "31";

console.log(typeof age);

