'use-strict';
const fs = require('fs');

function getNotes(note) {
    console.log(note);
};

function addNote(title, body) {
    const notes = loadNotes();
    const rep = notes.filter(note => note.title === title);
    if (rep.length > 0) {
        console.log('note title taken... not saved');
    } else {
        notes.push({ title, body });
        saveNotes(notes);
        console.log('note added!');
    }
};

function removeNote(title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log('note removed!');
    } else {
        console.log('note does not exist');
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
    removeNote
};