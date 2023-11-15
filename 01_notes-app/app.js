'use-strict';
const validator = require('validator');
const notes = require('./notes');

console.log(validator.isEmail('vector386@gmail.com'));
console.log(validator.isURL('http://example.com'));
// console.log(notes.getNotes());