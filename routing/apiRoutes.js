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
        // console.log(arrayOfFriends);
    });
    

    // API POST Requests

      app.post("/api/friends", function(req, res) {
        // console.log(req.body.scores);
        // console.log(thisFriend);
    
        var thisFriend = req.body;

        var userScores = thisFriend.scores;

        var bestFriendName = '';
        var bestFriendPic = '';
        var totalDifference = 100;

        for(var i = 0; i < arrayOfFriends.length; i++) {
            var difference = 0;
            for(var j = 0; j < userScores.length; j++) {
              userScores[j] = parseInt(userScores[j]);
              difference += Math.abs(arrayOfFriends[i].scores[j] - userScores[j]);
            }

            // console.log(difference);
            
            
         // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
        //  whatever the difference is, add to the total difference
 
          if(difference < totalDifference) {
            totalDifference = difference;
            bestFriendName = arrayOfFriends[i].friendName;
            bestFriendPic = arrayOfFriends[i].friendImage;

            console.log(bestFriendName);

          }
       
        }

    
        // after finding match, add user to friend array
        arrayOfFriends.push(thisFriend);
    
	// Send appropriate response
    res.json({status: 'OK', bestFriendName: bestFriendName, bestFriendPic: bestFriendPic});
    
    });
};
   
   
   
