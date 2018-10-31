// LOAD DATA
// Link routes to the data source

var friendData = require("../app/data/friends");

// ROUTING

module.exports = function(app) {
    // API GET Requests
    // This code handles when users visit a page
    
    app.get("/api/friends", function(req,res) {
        res.json(friendData)
    });
    
    // API POST Requests
    // handles when user submits a form and submits data to the server
    // When a user submits form data (a JSON objects)
    // the JSON is pushed to javascript array
    // user fills out friend survey and the data gets sent to the server
    // the server saves the data to the friendData array
    
    app.post("/api/friends", function(req,res){
        friendData.push(req.body);
        res.json(true);
    })
}