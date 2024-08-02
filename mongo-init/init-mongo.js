const fs = require('fs');
const path = require('path');

// Use the absolute path
const dataPath = path.join('/docker-entrypoint-initdb.d', 'data.json');

// Read the data file
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Connect to the MongoDB instance
const db = connect('mongodb://localhost:27017/movie-api-db');

// Insert data into the desired collection
db.movies.insertMany(data);
