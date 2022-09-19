const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];
class UserBase {
  constructor (users) {
      this.users = users;
  }
  count() {
      return users.length;
  }
  getNames() {
    // maps to find the name of users
      const findname = users.map((user) => user.name);
      return findname;
  }
  getIntroductions() {
      const usersMessages = users.map((user) => `Hi, my name is ${user.name}`);
      return usersMessages;
  }    
}
module.exports = UserBase;




// The above code is run through running below code in the terminal 



      // node
      
      // const User = require('./user');

      // const UserBase = require('./userbase');

      // const users = [
      //   new User('Uma'),
      //   new User('Josh'),
      //   new User('Ollie')
      // ];

      // const userBase = new UserBase(users);

      // userBase.count();

      // userBase.getNames();

      // userBase.getIntroductions();