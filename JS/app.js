// //

// console.log('Hello World')
// console.log(456)


// // var, let, const

// var name = 'Guzman'
// console.log(name)

// const lame = 'Gooze';

// console.log(typeof lame);

// //

// let val;

// val = 5;

// //Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = parseInt('100');
// val = parseFloat('100.30');



//output
// console.log(val);

// Concatenation, Append and length

const firstName = 'William';
const lastName = 'Jones';
const age = 36;
const str = 'Hello there my name is Marco'

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
//console.log(val);  William Jones

// Append
val = 'Brad';
val += 'Traversty';
console.log(val);

val = 'Hello, my name is' + ' ' + firstName + ' ' + 'and I am' + ' ' + age
console.log(val);

// Escaping
val = 'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);


// concat
val = firstName.concat(' ', lastName);
console.log(val);


// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
console.log(val);

val = firstName[2]; // prints out l (third letter for William)..0,1,2
console.log(val);

// indexOf()
val = firstName.indexOf('l');
console.log(val); // (2) prints out the position of the first letter l (William).

val = firstName.lastIndexOf('l');
console.log(val); // (3) prints out the position of the last letter l.

// charAt()
val = firstName.charAt('2');
console.log(val); // Prints out l.  second letter in William from index 0.

// Get last Char
val = firstName.charAt(firstName.length - 1);
console.log(val); // m

// substring()
val = firstName.substring(0, 4);
console.log(val); // Will

// slice()
val = firstName.slice(0, 4);
console.log(val); // Will
val = firstName.slice(-3);
console.log(val); // iam  prints out last 3 letters (William)

// split()
val = str.split(' ');

console.log(val);

// replace()
val = str.replace('Marco', 'Jack');
console.log(val); // Marco gets replaced with the name Jack.

// includes()
val = str.includes('Hello');
console.log(val); // gives true or false value if in string, as Hello included in str above.