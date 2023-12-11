const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./Routes/routes.js');

const app = express();

// Middleware to parse with JSON body
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/api', routes);

// PORT
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Services started in port: ${PORT}`);
});