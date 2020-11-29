// Function Overloading.

//Javascript does not allow function overloading directly.
//We have to use arguments or rest-spread operators of ES6 to support function overloading.

//First lets try to create same name functions with different parameters

function print(a) {
  console.log(a);
}

function print(a, b) {
  console.log(a, b);
}

print(1); //1 undefined
print(1, 2); //1 2

//Here, JS will parse line by line code and it will replace first function

//Now, lets try to create function that will support function overloading...

console.log("\n*************** ES5 ****************\n");

//ES5
function printES5() {
  console.log(Array.prototype.join.call(arguments));
}

printES5(1);
printES5(2, 3);
printES5(4, 5, 6);
printES5(7, 8, 9, 10);

console.log("\n*************** ES6 ****************\n");

//ES6
function printES6(...args) {
  console.log(args.join());
}

printES6(1);
printES6(2, 3);
printES6(4, 5, 6);
printES6(7, 8, 9, 10);
