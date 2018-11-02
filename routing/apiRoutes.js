// LOAD DATA
// Link routes to the data source
var arrayOfFriends = require("../app/data/friends");

// ROUTING

module.exports = function(app) {
    // API GET Requests
    // This code handles when users visit a page
    // get the data from the user
    app.get("/api/friends", function(req,res) {
        res.json(arrayOfFriends)
    });
    
    // app.get("/api/survey", function(req,res) {
    //     res.json(surveyData)
    // });
    // API POST Requests
    // handles when user submits a form and submits data to the server
    // When a user submits form data (a JSON objects)
    // the JSON is pushed to javascript array
    // user fills out friend survey and the data gets sent to the server
    // the server saves the data to the friendData array
    
    
      app.post("/api/friends", function(req, res) {
        // console.log(req.body.scores);
        // console.log(thisFriend);
    
        // Receive user details (name, photo, scores)
        var thisFriend = req.body;
        var userScores = thisFriend.scores;

        var bestFriendName = '';
        var bestFriendPic = '';
        var totalDifference = 100;

        for(var i = 0; i < arrayOfFriends.length; i++) {
            var difference = 0;
            
            
         // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
             //  whatever the difference is, add to the total difference
            
             // parseInt for scores
        //   thisFriend.scores[i] = parseInt(thisFriend.scores[i]);

          for(var j = 0; j < userScores.length; j++) {
            difference += Math.abs(arrayOfFriends[i].scores[j] - userScores[j]);
          }
         
          // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
          if(difference < totalDifference) {
            totalDifference = difference;
            bestFriendName = arrayOfFriends[i].name;
            bestFriendPic = arrayOfFriends[i].photo;
          }
       
        }

    
        // after finding match, add user to friend array
        arrayOfFriends.push(thisFriend);
    
	// Send appropriate response
    res.json({status: 'OK', bestFriendName: bestFriendName, bestFriendPic: bestFriendPic});
   
    });
};
   
   
   
