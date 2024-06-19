let employees = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  
  function mapEmployeeIdsToNames(employees) {
    let map = new Map();
    for (let employee of employees) {
      map.set(employee.id, employee.name);
    }
    return map;
  }
  
  let employeeMap = mapEmployeeIdsToNames(employees);
  console.log(employeeMap);
 
  