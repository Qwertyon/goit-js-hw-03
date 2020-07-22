const countProps = function (obj) {
  const makeArrayOfKeys = Object.keys(obj);
  return makeArrayOfKeys.length;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
