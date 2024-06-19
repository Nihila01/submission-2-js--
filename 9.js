function countOccurrences(arr) {
    let map = new Map();
    for (let str of arr) {
      map.set(str, (map.get(str) || 0) + 1);
    }
    return map;
  }
  
  let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
  console.log(countOccurrences(strings));
  
  

