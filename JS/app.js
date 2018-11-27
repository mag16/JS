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

// const firstName = 'William';
// const lastName = 'Jones';
// const age = 36;
// const str = 'Hello there my name is Marco'

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;
// //console.log(val);  William Jones

// // Append
// val = 'Brad';
// val += 'Traversty';
// console.log(val);

// val = 'Hello, my name is' + ' ' + firstName + ' ' + 'and I am' + ' ' + age
// console.log(val);

// // Escaping
// val = 'That\'s awesome, I can\'t wait';
// console.log(val);

// // Length
// val = firstName.length;
// console.log(val);


// // concat
// val = firstName.concat(' ', lastName);
// console.log(val);


// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();
// console.log(val);

// val = firstName[2]; // prints out l (third letter for William)..0,1,2
// console.log(val);

// // indexOf()
// val = firstName.indexOf('l');
// console.log(val); // (2) prints out the position of the first letter l (William).

// val = firstName.lastIndexOf('l');
// console.log(val); // (3) prints out the position of the last letter l.

// // charAt()
// val = firstName.charAt('2');
// console.log(val); // Prints out l.  second letter in William from index 0.

// // Get last Char
// val = firstName.charAt(firstName.length - 1);
// console.log(val); // m

// // substring()
// val = firstName.substring(0, 4);
// console.log(val); // Will

// // slice()
// val = firstName.slice(0, 4);
// console.log(val); // Will
// val = firstName.slice(-3);
// console.log(val); // iam  prints out last 3 letters (William)

// // split()
// val = str.split(' ');

// console.log(val);

// // replace()
// val = str.replace('Marco', 'Jack');
// console.log(val); // Marco gets replaced with the name Jack.

// // includes()
// val = str.includes('Hello');
// console.log(val); // gives true or false value if in string, as Hello included in str above.

// const newName = 'Marcus';
// const newAge = 29;
// const job = 'Web Developer';
// const city = 'San Diego';
// let html;

// // WIthout template strings (es5) old way
// html = '<ul><li>Name: ' + newName + '<li><li>Age: ' + newAge + '<li><li>Job: ' + job
//     + '<li><li>City: ' + city + '</li><ul>';

// html = '<ul>' +
//     '<li>Name: ' + newName + '<li>' +
//     '<li>Age: ' + newAge + '<li>' +
//     '<li>Job: ' + job + '<li>' +
//     '<li>City: ' + city + '<li>' +
//     '</ul>';


// function hello() {
//     return 'hello';
// }    
// // With template strings aka template literals (es6)
// html = `
//     <ul>
//         <li>Name: ${newName}</li>
//         <li>Age: ${newAge}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>  
//         <li>${hello()}</li>
//         <li>${newAge > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
// `;



// document.body.innerHTML = html;


// Create some Arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// let value;

// //Get array length
// value = numbers.length;

// // check if is array
// value = Array.isArray(numbers);  // test if its an array

// // Get single value
// value = numbers[3]; // 23
// value = numbers[0]; // 43

// // Insert into array
// numbers[2] = 100;

// // Find index of value
// val = numbers.indexOf(36);

// // // MUTATING ARRAYS
// // // add on to end
// // numbers.push(250);
// // // add pm tp front
// // numbers.unshift(120);
// // // take off from end
// // numbers.pop();

// // // take off from front
// // numbers.shift();

// // // Splice values
// // numbers.splice(1, 3)  // removes the numbers at the location specified

// // // reverse
// // numbers.reverse();

// // // Concatenate ArraY
// // value = numbers.concat(numbers2); // added the second array to first one

// // Sorting Arrays
// value = fruit.sort();
// value = numbers.sort();

// // Use the "Compare Function"
// value = numbers.sort(function (x, y) {
//   return x - y;
// });

// // Reverse Sort
// value = numbers.sort(function (x, y) {
//   return y - x;
// });

// // Find
// function under50(num) {
// return num < 50;
// }
// value = numbers.find(under50); // 43

// console.log(numbers);
// console.log(value);

// OBJECT LITERALS

const person = {
    firstName: 'Jon',
    lastName: 'Guzman',
    age: 30,
    email: 'jon@aol.com',
    hobbies: ['video games', 'sports'],
    address: {
        city: 'San Diego',
        state: 'CA'
    },
    getBirthYear: function() {
    return 2017 - this.age;
    }

}

let values;

values = person

// Get a specific value
values = person.firstName
values = person['lastName']
values = person.age
values = person.hobbies[1]
values = person.address.state
values = person.address['city']
values = person.getBirthYear


console.log(values);

