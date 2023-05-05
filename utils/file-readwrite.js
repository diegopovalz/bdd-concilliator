const fs = require('fs');

const writeDataToFile = async (data) =>
  fs.writeFile('data.txt', data, (err) => {
    if (err) {
      console.log(err);
    }
  });

const askForFileName = () => 'What is the name of the file?';

const readDataFromFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, _) => {
    if (err) throw err;
  });
};

module.exports = {
  writeDataToFile,
  readDataFromFile,
  askForFileName,
};
