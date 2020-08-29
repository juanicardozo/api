const express = require("express");
const app = express();
const cors = require('cors');

// postman

const moviesRouter = require('./routes/movies');
const actorsRouter = require('./routes/actors');
const genresRouter = require('./routes/genres');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/movies', moviesRouter);
app.use('/actors', actorsRouter);
app.use('/genres', genresRouter);

app.listen(3000, function(){
    console.log("Todo piola en el puerto 3000");
})