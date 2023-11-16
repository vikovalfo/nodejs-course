'use-strict';

const fs = require('fs');

let fileObj = JSON.parse(fs.readFileSync('01-data.json').toString());
fileObj = { ...fileObj, name: 'Alessa', age: 34 };
console.log(fileObj);