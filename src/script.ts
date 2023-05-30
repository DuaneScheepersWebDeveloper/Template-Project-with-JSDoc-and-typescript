//npm run doc  --> this runs your jsdoc
//tsc -w  --> this runs and watches for any changes in your TypeScript

/**
 * Example function
 * This function returns the sum of two numbers
 * @param a
 * @param b
 * @returns a total of two numbers
 */
const mySum = (a: number, b: number) => {
  return a + b;
};

console.log(mySum(2, 3));
/**
 * @type {string}
 */
const studentName = 'Jorge';
//A simple test for jsDoc, please note this module
import { add, subtract, divide, multiply } from './module/calculator.js';
console.log(add(20, 5));
