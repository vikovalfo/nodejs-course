const express = require('express');
const morgan = require('morgan');

const app = express();

const taskRouter = require('./api/task/index');
const userRouter = require('./api/user/index');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('common'));
app.use('/tasks', taskRouter);
app.use('/users', userRouter);

app.listen(port, () => console.log('Server listening on port', port));