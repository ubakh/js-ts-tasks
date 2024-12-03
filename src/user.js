class User {
  #name;
  #age;
  #firstName;
  #secondName;

  constructor(firstName, secondName, age) {
    if (!this.#validInput(firstName) || !this.#validInput(secondName)) {
      throw new Error("'should not create User instance with any empty data'");
    }
    this.#firstName = firstName;
    this.#secondName = secondName;

    this.#name = `${this.#firstName} ${this.#secondName}`;

    if (age === undefined || typeof age !== 'number') {
      throw new Error('should not allow to create User instance with wrong data types');
    }
    this.#age = age;
  }

  #validInput(input) {
    return !(input === null || input === undefined);
  }

  introduce() {
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
  }

  set firstName(newName) {
    this.#firstName = newName;
    this.#name = `${newName} ${this.#secondName}`;
  }

  set secondName(newName) {
    this.#secondName = newName;
    this.#name = `${this.#firstName} ${newName}`;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  celebrateBirthday() {
    this.#age++;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(user => {
    return new User(user.firstName, user.secondName, user.age);
  });
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort((a, b) => {
      return TestUtils.comparator(a, b);
    });
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  let result = [];
  for (let i = 0; i < users.length; i++) {
    if (isEven(i)) {
      users[i].celebrateBirthday();
    }
    result.push(users[i]);
  }
  return result;
};

function isEven(i) {
  return i % 2 === 0;
}
