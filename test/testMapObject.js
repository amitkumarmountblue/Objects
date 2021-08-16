const mapObject=require("../mapObject");
const testObject=require("../Object");


const cb = x => x;
console.log(mapObject(testObject, cb));