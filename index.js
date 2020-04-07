const fs = require('fs');
const path = require('path');
const neatCsv = require('neat-csv');

const filePath = path.join(__dirname, 'users.csv');
fs.readFile(filePath, async (error, data) => {
  if (error) {
    return console.log('error reading file');
  }
  const parsedData = await neatCsv(data);
  console.log(parsedData);
});
