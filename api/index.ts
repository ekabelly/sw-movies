// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

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

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
