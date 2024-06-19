function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0];
  }
  
  console.log(addDays("2022-06-15", 10));
  
  