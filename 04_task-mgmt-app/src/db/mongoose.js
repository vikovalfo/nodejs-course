const mongoose = require('mongoose');
const validator = require('validator');
const { connectionData } = require('../config');

const connectionURL = `${connectionData.protocol}${connectionData.user}${connectionData.password}${connectionData.hostname}${connectionData.domain}${connectionData.database}`;

mongoose.connect(connectionURL)
    .then(() => console.log("Database connected!"))
    .catch(err => console.log('Error: ', err));

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    password: {
        type: String,
        default: '',
        trim: true,
        required: true,
        validate(value) {
            if (value.length < 6 || value.includes('password')) {
                throw new Error('Password format entered is incorrect')
            }
        }
    }
})

const me = new User({
    name: '   Pepe  ',
    email: 'myemail@gmail.uk  ',
    password: 'asfkajsfsldfba'
    //age:-1
});

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
});

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

const toDo = new Task({
    description: 'Should rip the ubuntu iso on the pendrive',
});

toDo.save().then(() => console.log(toDo)).catch((err) => console.log('Error saving the task: ', err));