/**
 * Part 1:
 *    What will print and why?
 *      1 2 undefined y() is not called until after a is initialized as 1 and printed. 
 *      also x() is not defined within y() so calling x() inside won't do anything
 *    What will change if we delete line 15? Why?
 *      delete line 15 would not change anything since x() is never called
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
    let a = 2;
  console.log(a);
}

const y = () => {
  let a = 2;
  console.log(a);
}

let a = 1;
console.log(a);
y();
x();
