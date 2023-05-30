"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Example function
 * This function returns the sum of two numbers
 * @param a
 * @param b
 * @returns a total of two numbers
 */
const mySum = (a, b) => {
    return a + b;
};
console.log(mySum(2, 3));
/**
 * @type {string}
 */
const studentName = 'Jorge';
//A simple test for jsDoc, please note this module
const calculator_js_1 = require("./module/calculator.js");
console.log((0, calculator_js_1.add)(20, 5));
