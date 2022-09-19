class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = User;

// terminal > node

// const User = require('./user');
// const newuser = new User('Esra');

// To access the result of the class functions
// newuser.getName();
// [#returns] 'Esra'

// newuser.getIntroduction();
// [#returns] 'Hi, my name is Esra'
