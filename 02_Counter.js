/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  // let count = n;

  return function () {
    return n++; // we can do count ++ as well
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
