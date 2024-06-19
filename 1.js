let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
  ];
  
  function groupByType(transactions) {
    let grouped = {};
    for (let transaction of transactions) {
      let type = transaction.type;
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(transaction);
    }
    return grouped;
  }
  
  console.log(groupByType(transactions));
  