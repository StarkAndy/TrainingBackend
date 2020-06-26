const dataJSON={
 name:'Gyanesh',
 age:'27'
}

const data=JSON.stringify(dataJSON);

const parseData=JSON.parse(data);

console.log(parseData.age);