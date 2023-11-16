'use-strict';
const yargs = require('yargs');

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
    handler: (argv) => console.log('Title: ' + argv.title + ' \nBody: ' + argv.body)
});

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: () => console.log('removing new note')
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: () => console.log('Listing all notes')
});

yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: () => console.log('Reading note')
});

yargs.parse();
