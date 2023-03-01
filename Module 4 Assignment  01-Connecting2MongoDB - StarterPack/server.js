const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
//new code
const express = require('express');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//routes
const loanRoute = require('./routes/loanRoute');
app.use('/loan', loanRoute);

//Connecting to the database
const mongoose = require('mongoose');

//asynchronous connection
mongoose.connect('mongodb+srv://admin:<password>@ift458.bvcjbzu.mongodb.net/Loans', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.log(err));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
