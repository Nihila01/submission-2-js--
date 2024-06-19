function union(...arrays) {
    let resultSet = new Set();
    for (let array of arrays) {
      for (let item of array) {
        resultSet.add(item);
      }
    }
    return [...resultSet];
  }
  
  let arr1 = [1, 2, 3]; // Renaming array1 to arr1
  let arr2 = [3, 4, 5];
  let arr3 = [5, 6, 7];
  console.log(union(arr1, arr2, arr3));
  
  