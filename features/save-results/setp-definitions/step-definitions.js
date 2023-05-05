const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { askForFileName } = require('../../../utils/file-readwrite');
const { compareEquals } = require('../../../utils/comparer');

let DATA_SET_1 = null;
let DATA_SET_2 = null;
let result = null;

Given('I compared two different values', function () {
  DATA_SET_1 = [1, 2, 3];
  DATA_SET_2 = [1, 2, 3, 4];
  compareEquals(DATA_SET_1, DATA_SET_2);
});

When('I press Save', function () {
  result = askForFileName();
});

Then('I should see a message asking for a file name', async function () {
  const EXPECTED_RESULT = 'What is the name of the file?';
  expect(result).equals(EXPECTED_RESULT);
});
