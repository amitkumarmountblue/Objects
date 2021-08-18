function values(obj) {
  const resArr = [];
  for ( let prop in obj ) {
    if(typeof obj[prop] === "function"){
        continue;
    }else{
        resArr.push(obj[prop]);
    }
}
  return resArr;
}
module.exports = values;