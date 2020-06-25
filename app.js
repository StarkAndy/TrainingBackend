// //using library chalk
// const chalk=require('chalk');

// //getting note.js file
// const getNotes=require('./note.js');

// //printing function
// console.log(getNotes());

// //using chalk library;
// console.log(chalk.yellow('Blue'));

const yargs = require('yargs');
const chalk=require('chalk');

yargs.command({
	command: 'add',
    description: 'To Add notes',
    builder:{
        title:{
            description:'Name of the  notes',
            demandOption:true,
            type:'string',
        },
        body:{
            desciption:'Notes Description',
            demandOption:true,
            type:'string',
        }
    },
	handler: function (argv) {
		console.log(chalk.blue('Notes added success ..',argv.body));
	},
});

yargs.command({
    command:'remove',
    description:'To Remove notes',
    handler:function(){
        console.log(chalk.red("Notes removed success .."));
    }
})

yargs.command({
    command:'list',
    description:'To list the notes',
    handler:function(){
        console.log(chalk.yellow("Showing list of notes ..."));
    }
})

console.log(yargs.argv);