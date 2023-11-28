const mongoose = require('mongoose');

const connectionURL = require('../../config/connection');

mongoose.connect(connectionURL);

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = Task;