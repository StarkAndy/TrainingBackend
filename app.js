//const fs= require('fs');

//commands created new files with description
//fs.writeFileSync('notes.txt','My name is gyanesh Bohara');

//fs.appendFileSync('notes.txt','.I feel awesome');


//using validator library
const validator=require('validator');

const add =require('./utils.js');

console.log(add(4,5));
console.log(add.subtract(1,5))
console.log(validator.isEmail('gyaneshbohara@gmail.com'));   //vaidates if it's email
console.log(validator.isURL('https://www.google.com'));

