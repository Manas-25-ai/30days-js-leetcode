/**
 * @param {number} init
 * @return {Object}
 */
var createCounter = function (init) {
  let count = init;
  const original = init;

  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    reset: function () {
      count = original;
      return count;
    },
  };
};
