//using library chalk
const chalk=require('chalk');

//getting note.js file 
const getNotes=require('./note.js');

//printing function
console.log(getNotes());

//using chalk library;
console.log(chalk.yellow('Blue'));

console.log(process.argv[2]);
