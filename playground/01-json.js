'use-strict';

const fs = require('fs');

const fileBuffer = fs.readFileSync('01-data.json');
const fileData = fileBuffer.toString();

const fileObj = JSON.parse(fileData);
fileObj.name = 'Alessa';
fileObj.age = 34;
console.log(fileObj);