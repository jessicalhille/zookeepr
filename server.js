// reads the index.js files in each of these directories
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
// module built into the Node.js API that provides utilities for working with file and directory paths
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals.json');

const PORT = process.env.PORT || 3001;
const app = express();

// provides a file path to a location in our application(the public folder)
// and instructs the server to make these files static resources
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// when client navigates to <ourhost>/api, the app will use the router in apiRoutes
app.use('/api', apiRoutes);
// if / is the endpoint, the router will serve back our HTML routes
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});