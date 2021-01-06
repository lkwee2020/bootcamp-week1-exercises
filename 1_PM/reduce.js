const assert = require('assert')

/**
 * Complete the implementation of sum and reduce such that reducing an array
 * returns the sum of its values. e.g. [0,4,3,6,9].reduce(sum, 0) === 22
 */

const sum = (acc, cur) => {
    return acc + cur
};

Array.prototype.reduce = function(fun, init) {
    if (this.length > 1) {
        newInit = fun(this[this.length-1], init)
        console.log(newInit)
        this.pop()
        return this.reduce(fun, newInit)
    } else {
        console.log(fun(this[this.length-1], init))
        return fun(this[this.length-1], init)
    }
};

const arr1 = [0, 1, 2, 3, 4];
const arr2 = [3, -4, 134, 0.5, 7];

assert(arr1.reduce(sum, 0) === 10);
assert(arr2.reduce(sum, 0) === 140.5);
