console.log("operators");

if (1 == 1) {
    console.log("yes!");
} else {
    console.log("nope");
}

console.log(1 == 1);

console.log(1 != 2);
console.log(1 != 1);

let value1 = 'string 1';
let value2 = 'string 2';

console.log(value1 == value2);

console.log('1' !== 1);

console.log('string' > 'strin');
console.log(2 > 1.99999);

console.log(12 <= 12);

if (value1 !== value2) {
    console.log(value1 + " is different from " + value2);
}

const names = ["First Name", "Last Name"];
console.log(names[0] + " - " + names[1]);

let whatIsThis = "b" + "a" + + "a" + "a"; 
console.log(whatIsThis.toLowerCase());

console.log(1 === 1 && 3 === 4);
console.log((1 !== 1 || 3 === 4) && true );

const isValid = true;
console.log(isValid ? 'it is' : 'it is not');
console.log(!isValid ? 'it is' : 'it is not');


console.log("end of the file");