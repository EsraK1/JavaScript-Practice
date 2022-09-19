const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.totalprice = 0
  }

  addItem(sweet) {
    this.totalprice += sweet.price
  }

  getTotalPrice() {
    return this.totalprice
  }
}

module.exports = ShoppingBasket;


// terminal > node
// const ShoppingBasket = require('./shoppingbasket');
// const shoppingbasket = new ShoppingBasket(basket);


// shoppingbasket.addItem(new Candy('Skittle', 3.99));
// shoppingbasket.addItem(new Candy('Mars', 3.99));

// shoppingbasket.getTotalPrice();



// console.log prints to the terminal
// return returns the value. Doesnt turn anything to the terminal