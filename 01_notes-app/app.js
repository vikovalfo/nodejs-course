'use-strict';
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add new note',
    handler: () => console.log('adding new note')
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

console.log(yargs.argv);