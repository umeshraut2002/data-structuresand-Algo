let currency = 'USD';
fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
  .then((res) => res.json())
  .then((data) => {
    console.table(data);
  });
