// Write me a function to flatten an object nested in an object
// Example:
// Input: { c:2,a: { b: 1 } }
// Output: { c:2, b: 1 }
// Input: { c:2,a: { b: 1, d: { e: 3 } } }
// Output: { c:2, b: 1, e: 3 }

export function flatten(obj) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      const flatObject = flatten(obj[key]);
      for (const key2 in flatObject) {
        result[key2] = flatObject[key2];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
