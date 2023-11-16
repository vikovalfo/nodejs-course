'use-strict';
const yargs = require('yargs');

const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
});

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: () => notes.getNotes()
});

yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => notes.getNote(argv.title)
});

yargs.parse();
