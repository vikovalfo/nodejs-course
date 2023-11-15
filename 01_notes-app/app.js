'use-strict';
const fs = require('fs');

const FILE_PATH = __dirname + '\\' + 'notes.txt';

fs.writeFileSync(FILE_PATH, 'This file was created by nodejs');
fs.appendFileSync(FILE_PATH, '\n this is another line');