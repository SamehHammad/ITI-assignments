// Vehicle constructor
function Vehicle(speed, color) {
  if (
    typeof speed !== "number" ||
    typeof color !== "string"
  ) {
    throw new TypeError("Invalid data type.");
  }
//data discriptor 
  Object.defineProperty(this, "speed", {
    value: speed,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "color", {
    value: color,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}

Vehicle.prototype.turnLeft = function () {
  console.log("Turning left");
};
Vehicle.prototype.turnRight = function () {
  console.log("Turning right");
};

Vehicle.prototype.start = function () {
  console.log(`Starting...`);
};

Vehicle.prototype.stop = function () {
  console.log("Stopping...");
};

Vehicle.prototype.getBackWard = function (speed, accel) {
  console.log(`Going backward at ${speed} km/h with acceleration ${accel}`);
};

Vehicle.prototype.getForward = function (speed, accel) {
  console.log(`Going forward at ${speed} km/h with acceleration ${accel}`);
};

// motorVehicle constructor
function motorVehicle(sizeOfengine, licencePlate) {
  if (
    typeof sizeOfengine !== "number" ||
    typeof licencePlate !== "string"
  ) {
    throw new TypeError("Invalid data type.");
  }

  Object.defineProperty(this, "sizeOfengine", {
    value: sizeOfengine,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "licencePlate", {
    value: licencePlate,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}
motorVehicle.prototype.start = function () {
  console.log("Starting motor vehicle...");
};

motorVehicle.prototype.getSizeOfEngine = function () {
  console.log(`Engine size: ${this.sizeOfengine}`);
};

motorVehicle.prototype.getLicence = function () {
  console.log(`Licence plate: ${this.licencePlate}`);
};

// Bicycle constructor
function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);

}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function () {
  console.log("Bicycle Ring bell!");
};

// Car constructor
function Car(numberODoors, numberOfWheels, weight) {
  motorVehicle.call(this, 0, "red");
  if (
    typeof numberODoors !== "number" ||
    typeof numberOfWheels !== "number" ||
    typeof weight !== "number"
  ) {
    throw new TypeError("Invalid data type.");
  }

  Object.defineProperty(this, "numberODoors", {
    value: numberODoors,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "numberOfWheels", {
    value: numberOfWheels,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "weight", {
    value: weight,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}

Car.prototype = Object.create(motorVehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.switchOnAirCon = function () {
  console.log("Air conditioning switched on");
};

Car.prototype.getNumberOfDoors = function () {
  console.log(`Number of doors: ${this.numberODoors}`);
};

// DumbTruck constructor
function DumbTruck(loadCapacity, numberOfWheels, weight) {
  motorVehicle.call(this, 5.6, "XYZ789");

  if (
    typeof loadCapacity !== "number" ||
    typeof numberOfWheels !== "number" ||
    typeof weight !== "number"
  ) {
    throw new TypeError("Invalid data type.");
  }

  // Define properties using data descriptors
  Object.defineProperty(this, "loadCapacity", {
    value: loadCapacity,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "numberOfWheels", {
    value: numberOfWheels,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "weight", {
    value: weight,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}

// Inherit from motorVehicle constructor
DumbTruck.prototype = Object.create(motorVehicle.prototype);

DumbTruck.prototype.start = function () {
  console.log("Starting dump truck...");
};

DumbTruck.prototype.getBackWard = function () {
  //..
};

DumbTruck.prototype.lowerLoad = function () {
  // ...
};

DumbTruck.prototype.raiseLoad = function () {
  // ...
};

DumbTruck.prototype.toString = function () {
  return "This is a dump truck.";
};

DumbTruck.prototype.valueOf = function () {
  return 200;
};

//*test the task in console

// Create a bicycle instance
const myBike = new Bicycle(10, "blue");
// Call its methods
myBike.start(); // logs "Starting..."
myBike.getForward(20, 5); // logs "Going forward at 20 mph with acceleration 5"
myBike.turnLeft(); // logs "Turning left"
myBike.ringBell(); // logs "Ring ring!"

// Create a car instance
const myCar = new Car(4, 4, 1000);
const myMotor = new motorVehicle(4, "1000");

//Call its methods
myCar.start(); // logs "Starting..."
myCar.getNumberOfDoors(); // logs "Number of doors: 4"
myCar.switchOnAirCon(); // logs "Air conditioning switched on"
myCar.getLicence(); // logs "Licence plate: XYZ789"
myMotor.getSizeOfEngine(); // logs "Engine size: 5.6"

//Create a dump truck instance
const myTruck = new DumbTruck(5000, 6, 20000);

// Call its methods
myTruck.start(); // logs "Starting..."
myTruck.getBackWard(10, 2); // logs "Going backward at 10 mph with acceleration 2"
myTruck.lowerLoad(); // calls the lowerLoad method
console.log(myTruck.toString()); // logs "This is a dump truck."
console.log("ValueOf my truck = "+ myTruck.valueOf()); // logs 200
