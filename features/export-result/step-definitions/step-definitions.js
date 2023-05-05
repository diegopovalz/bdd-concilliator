const { Given, When, Then } = require('cucumber');
const { assert } = require('chai');
const { writeDataToFile } = require('../../../utils/file-readwrite');
const { getDifference } = require('../../../utils/comparer');
var fs = require('fs');

let DATA_SET_1 = null;
let DATA_SET_2 = null;
let result = null;

Given('I have two different values', function () {
  DATA_SET_1 = [1, 2, 3];
  DATA_SET_2 = [1, 2, 3, 4];
});

When('I compare them', function () {
  result = getDifference(DATA_SET_1, DATA_SET_2);
});

Then('I should get the result in a file', async function () {
  await writeDataToFile(result.toString());
  assert.isOk(fs.existsSync('data.txt'));
});
