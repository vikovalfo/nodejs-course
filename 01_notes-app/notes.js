'use-strict';
const fs = require('fs');
const chalk = require('chalk');

function getNote(title) {
    const notes = loadNotes();
    const note = notes.filter(note => note.title === title)[0];

    if (note) {
        console.log(chalk.magenta.inverse(note.title, note.body));
    } else console.log(chalk.red.inverse('note does not exist!'));
};


function getNotes() {
    const notes = loadNotes();
    notes.length > 0 ? notes.forEach(note => console.log(chalk.blue(note.title), chalk.cyan(note.body))) : console.log(chalk.yellow.inverse('No notes to be listed!'));
};

function addNote(title, body) {
    const notes = loadNotes();
    const rep = notes.filter(note => note.title === title);
    if (rep.length > 0) {
        console.log(chalk.red.inverse('note title taken... not saved'));
    } else {
        notes.push({ title, body });
        saveNotes(notes);
        console.log(chalk.green.inverse('note added!'));
    }
};

function removeNote(title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('note removed!'));
    } else {
        console.log(chalk.red.inverse('note does not exist'));
    }
};

function loadNotes() {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (error) {
        return [];
    }
};

function saveNotes(notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
};

module.exports = {
    getNotes,
    addNote,
    removeNote,
    getNote
};