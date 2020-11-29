//Inheritence

//ES5
//With __proto__
var animal = {
  canEat: true,
};

var rabbit = {
  canRun: true,
};

var pigeon = {
  canFly: true,
};

rabbit.__proto__ = animal;
pigeon.__proto__ = animal;

console.log(rabbit.canEat);
console.log(pigeon.canEat);

//With prototype
function Person(firstName, lastName, age, gender) {
  this.name = {
    firstName,
    lastName,
  };
  this.age = age;
  this.gender = gender;
}

function Teacher(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);

  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.printFullDetails = function () {
  console.log(`Name - ${this.name.firstName} ${this.name.lastName}`);
  console.log(`Age - ${this.age}`);
  console.log(`Gender - ${this.gender}`);
  console.log(`Subject - ${this.subject}`);
};

var mathsTeacher = new Teacher("Sumit", "Kumar", "30", "male", "Maths");
mathsTeacher.printFullDetails();

/************************************************************************/

//ES6
/*
class Person {
  constructor(first, last, age, gender) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
  }
}

class Teacher extends Person {
  constructor(first, last, age, gender, subject) {
    super(first, last, age, gender);
    this.subject = subject;
  }

  printFullDetails(){
      console.log(`Name - ${this.name.firstName} ${this.name.lastName}`);
    console.log(`Age - ${this.age}`);
    console.log(`Gender - ${this.gender}`);
    console.log(`Subject - ${this.subject}`);
  }
}
*/
