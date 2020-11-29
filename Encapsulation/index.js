//Encapsulation
//We can achieve encapsulation in JavaScript with the help of Function

function Logger() {
  this.log = function (message) {
    console.log(message);
  };

  this.logException = function (message, error) {
    console.log(`${message} ${error}`);
  };
}

const logger1 = new Logger();
logger1.log("Error 1");
logger1.logException("Caught Error", new Error("Unknown Error"));
