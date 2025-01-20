/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, rej) => {
    let resCollection = [];
    let resolved = 0;

    promisesArray.forEach((promise, ind) => {
      Promise.resolve(promise)
        .then(returnValue => {
          resCollection.splice(ind, 0, returnValue);
          resolved++;

          if (resolved === promisesArray.length) {
            resolve(resCollection);
          }
        })
        .catch(err => {
          rej(err);
        });
    });
  });
};
