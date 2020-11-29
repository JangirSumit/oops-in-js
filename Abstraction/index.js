//Abstraction

//We can achieve Abstraction in Javascript with the help of Closures

function flattenObject(obj) {
  var newObj = {};

  function flat(obj, parent) {
    for (const key in obj) {
      const newKey = parent ? parent + "." + key : key;
      if (obj[key] instanceof Object) {
        flat(obj[key], newKey);
      } else {
        newObj[newKey] = obj[key];
      }
    }
  }

  flat(obj, "");
  return newObj;
}

var employee = {
  name: { firstName: "Sumit", lastName: "Jangir" },
  address: {
    street: {
      lane: "10th lane",
    },
    pincode: 331507,
  },
  salary: 10000,
};

const newObj = flattenObject(employee);
console.log(newObj);
