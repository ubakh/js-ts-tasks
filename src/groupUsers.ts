/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */

module.exports.groupUsers = function (users: Array<User>): Record<'employees' | 'contractors', Array<User>> {
  let map: Map<String, Array<User>> = new Map<String, Array<User>>();
  function factory(d: string, user: User): void {
    switch (d) {
      case 'EMPLOYEE':
        if (map.get('employees') === undefined || map.get('employees') === null) {
          map.set('employees', new Array<User>());
        }
        // @ts-ignore
        map.get('employees').push(user);
        break;
      case 'CONTRACTOR':
        if (map.get('contractors') === undefined || map.get('contractors') === null) {
          map.set('contractors', new Array<User>());
        }
        // @ts-ignore
        map.get('contractors').push(user);
        break;
    }
  }
  users.forEach(user => {
    factory(user['type'], user);
  });
  // @ts-ignore
  let myRecord: Record<'employees' | 'contractors', Array<User>> = {};
  // @ts-ignore
  myRecord['employees'] = map.get('employees');
  // @ts-ignore
  myRecord['contractors'] = map.get('contractors');
  return myRecord;
};

interface User {
  name: string;
  login: string;
  surname: string;
  type: string;
  contractorCompanyName: string;
}
