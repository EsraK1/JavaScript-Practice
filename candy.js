class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
} 


module.exports = Candy;


// terminal > node

// const Candy = require('./candy');
// const candy = new Candy('Mars', 4.99);

// To access the result of the class functions
// candy.getName();
// [#returns] 'Mars'

// candy.getPrice();
// [#returns] 4.99
