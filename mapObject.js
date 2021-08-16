function mapObject(obj, cb){
    const res = {}
    Object.keys(obj).forEach((key) => {
        res[key] = cb(obj[key]);
    });
    return res;
}

module.exports = mapObject;