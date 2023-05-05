const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { getDifference } = require('../../../utils/comparer');

let DATA_SET_1 = null;
let DATA_SET_2 = null;
let result = null;

Given('I have two different sets of data', function () {
  DATA_SET_1 = [1, 2, 3];
  DATA_SET_2 = [1, 2, 3, 4];
});

When('I compare the two different data sets', function () {
  result = getDifference(DATA_SET_1, DATA_SET_2);
});

Then('I should be able to see the differences', function () {
  const EXPECTED_RESULT = [4];
  expect(result).to.include.all.members(EXPECTED_RESULT);
});
