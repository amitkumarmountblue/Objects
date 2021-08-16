function defaults(object, defaultProps){
    for (let name in defaultProps){
        if (!(object.hasOwnProperty(name))){
            object[name] = defaultProps[name];  
        }
    }
}
module.exports= defaults;