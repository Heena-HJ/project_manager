const cors = require('cors');
const express = require('express');
const app = express();
require('../database/db');
const authRoutes = require('./routes/authRoutes');
const taskRouter = require('./routes/taskRoutes');
const morgan = require('morgan');
const path = require('path');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/task', taskRouter);

app.use(express.static(path.join(__dirname, './client/dist')));
app.get("*", function(req, res){
	res.sendFile(path.join(__dirname, './client/dist/index.html'))
});

// localhost:4000/auth/register

const port = 4000;

app.listen(port, () => {
	console.log(`server is running on port`, port);
});