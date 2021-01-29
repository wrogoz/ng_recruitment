const express = require('express');
require('dotenv').config()
require('./db_config/db_config');
const app = express();
const moviesRoute = require('./routes/moviesRoute');
app.use(express.json());


app.use('/movies',moviesRoute);


const port = 3257;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});