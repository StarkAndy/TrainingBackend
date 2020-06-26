const fs = require('fs');

const books=[
    {name:'Gyanesh Bohara',profession:'Software Engineer'},
    {name:'Srini',profession:'Project Architect'}
];

const dataBuffer=JSON.stringify(books);
fs.writeFileSync('1-json.json',dataBuffer);


// const dataBuffer=fs.readFileSync('1-data.json');
// const dataJson=dataBuffer.toString();

// const data=JSON.parse(dataJson);

// console.log(data.title);


//checking
// const dataJSON={
//  name:'Gyanesh',
//  age:'27'
// }

// const data=JSON.stringify(dataJSON);

// const parseData=JSON.parse(data);

// console.log(parseData.age);