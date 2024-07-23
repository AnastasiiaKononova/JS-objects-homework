const user = {
  firstName: "Irina",
  lastName: "Ivanova",
  email: "irina.ivanova@gmail.com",
  password: "qwerty",
  tel: "+380672436557",
  address: {
    city: "Zaporizhzhya",
    street: "Gogol",
    house: "153",
    apartments: "86",
  },
  greetUser() {
    console.log(`Доброго дня, ${this.firstName} ${user.lastName}`);
  },
};

user.greetUser();

function greetUser(user) {
  console.log(`Доброго дня, ${user.firstName} ${user.lastName}`);
}

greetUser(user);

function showUserInfo(user) {
  for (const key in user) {
    if (typeof user[key] === "string") {
      console.log(user[key]);
    }
  }
}

showUserInfo(user);

const car = {
  color: "red",
  model: "Q7",
  brand: "Audi",
  engineVolume: 3,
  capacityOfPassengers: 7,
  speed: 0,
  maxSpeed: 250,

  accelerate: function (kmPerHour) {
    this.speed += kmPerHour;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    console.log(`Поточна швидкість: ${this.speed} км/год`);
  },

  deaccelerate: function (kmPerHour) {
    this.speed -= kmPerHour;
    if (this.speed < 0) {
      this.speed = 0;
    }
    console.log(`Поточна швидкість: ${this.speed} км/год`);
  },

  stop: function () {
    this.speed = 0;
    console.log(`Поточна швидкість: ${this.speed} км/год`);
  },
};

car.accelerate(30);
car.accelerate(200);
car.deaccelerate(100);
car.stop();

class Car {
  constructor(
    color,
    model,
    brand,
    engineVolume,
    capacityOfPassengers,
    speed,
    maxSpeed
  ) {
    this.color = color;
    this.model = model;
    this.brand = brand;
    this.engineVolume = engineVolume;
    this.capacityOfPassengers = capacityOfPassengers;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
  }

  accelerate(value = 0) {
    if (isNaN(value)) {
      return false;
    }
    this.speed += value;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    return this.speed;
  }

  deaccelerate(value = 0) {
    if (isNaN(value)) {
      return false;
    }
    this.speed -= value;
    if (this.speed < 0) {
      this.speed = 0;
    }
    return this.speed;
  }

  stop() {
    this.speed = 0;
    return this.speed;
  }
}

const car1 = new Car("blue", "Qashqai", "Nissan", "2.5", 5, 0, 200);
const car2 = new Car("red", "Civic", "Honda", "1.8", 5, 0, 180);
const car3 = new Car("black", "X5", "BMW", "3.2", 5, 0, 250);

console.log(car1);
console.log(car2);
console.log(car3);
