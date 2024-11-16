function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj
    }
    if (Array.isArray(obj)) {
      return obj.map(item => deepCopy(item));
    }
    if (obj instanceof Set) {
      return new Set([...obj].map(item => deepCopy(item)));
    }
    if (obj instanceof Map) {
      return new Map([...obj].map(([key, value]) => [deepCopy(key), deepCopy(value)]));
    }
    if (obj instanceof WeakSet || obj instanceof WeakMap) {
      return obj; 
    }
    const copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    const symbols = Object.getOwnPropertySymbols(obj);
    for (const sym of symbols) {
      copy[sym] = deepCopy(obj[sym]);
    }
    return copy;
}
module.exports = { deepCopy };