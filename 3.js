let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
  ];
  
  function checkDuplicates(classes) {
    let nameSet = new Set();
    for (let classList of classes) {
      for (let name of classList) {
        if (nameSet.has(name)) {
          return true;
        }
        nameSet.add(name);
      }
    }
    return false;
  }
  
  console.log(checkDuplicates(classes));
  
  