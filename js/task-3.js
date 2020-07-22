const findBestEmployee = function (employees) {
  const entriesOfEmployers = Object.entries(employees);
  let bestWork = 0;
  let bestWorker;
  for (let i = 0; i < entriesOfEmployers.length; i += 1) {
    if (entriesOfEmployers[i][1] > bestWork) {
      bestWork = entriesOfEmployers[i][1];
      bestWorker = entriesOfEmployers[i][0];
    }
  }
  return bestWorker;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
