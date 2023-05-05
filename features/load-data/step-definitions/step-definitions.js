const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { readDataFromFile } = require('../../../utils/file-readwrite');

let DATA_SET_1 = null;
let DATA_SET_2 = null;
let dataSet1Directory = null;
let dataSet2Directory = null;

Given('I have two files', function () {
  dataSet1Directory = './test-data/dataSet1.json';
  dataSet2Directory = './test-data/dataSet2.json';
});

When('I load the files', function () {
  DATA_SET_1 = readDataFromFile(dataSet1Directory);
  DATA_SET_2 = readDataFromFile(dataSet2Directory);
});

Then('I should see the files loaded', function () {
  expect(DATA_SET_1).to.not.equal(null);
  expect(DATA_SET_2).to.not.equal(null);
});
