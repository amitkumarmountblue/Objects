const testObject=require("../Object");
const defaults=require("../defaults");

const newObject = {name: 'Wruce Sayne', profession : 'Actor', location : 'Gotham'};
defaults(testObject, newObject);
console.log(testObject);