// Import necessary modules
import express, { response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import filmsRouter from './films/films.controller';

// Create an instance of express
const app = express();

// Enable CORS
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
    res.send({ message: 'Hello, World!' });
});


app.use('/api/v1/films', filmsRouter);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(error?.response?.status || error?.status || 500).send(error?.message || 'Unknown error');
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
