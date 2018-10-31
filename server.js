// DEPENDENCIES
// npm packages that are required for the server to work properly

var express = require("express");

// EXPRESS CONFIGURATION
// set up the basic properties for the express server

// Tell node that an express server is being created
var app = express();

// Set the initial port
var PORT = process.env.PORT || 8080;

// Set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
// point the server to the "route" files
// these files tell our server how to respond when users visit different URLs

// link to api routes
require("./routing/apiRoutes")(app);
// link to html routes
require("./routing/htmlRoutes")(app);

// LISTENER
// this code starts the server!

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
