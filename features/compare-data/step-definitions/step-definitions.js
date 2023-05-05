const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { compareEquals } = require('../../../utils/comparer');

let DATA_SET_1 = null;
let DATA_SET_2 = null;
let result = null;

Given('I have two sets of data', function () {
  DATA_SET_1 = [1, 2, 3];
  DATA_SET_2 = [1, 2, 3];
});

When('I compare the two data sets', function () {
  result = compareEquals(DATA_SET_1, DATA_SET_2);
});

Then('I should be able to see if the sets are the same', function () {
  expect(result).equals(true);
});
