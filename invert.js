function invert(obj) {
    const key = Object.keys(obj);
    const values = Object.values(obj);
    const inverted = []
    for ( let i = 0; i < key.length; i++) {
      inverted[i] = [values[i],key[i]];
    };
    return inverted;
  }

  module.exports = invert;