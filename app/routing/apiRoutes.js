// HW instructions
// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require("../data/friends.js");

// Routes
module.exports = function (app) {

    // Display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // Compatibility logic.
    app.post("/api/friends", function (req, res) {
        // return res.json(friendsData);

        // let newFriend = req.body.scores;
        // let scoreArray = [];
        let friendMatch;

        // Turning new friend into one object

        let newFriend = {
            name: "",
            photo: "",
            friendMatcherator: 1000
        };

        // Parse through users POST.
        let userData = req.body;
        let userScores = userData.scores;

        // Calculate difference between users in database.
        let compatibility = 0;

        // Loop through buddies.
        for (let i = 0; i < friendsData.length; i++) {

            // console.log(friendsData[i]);
            compatibility = 0;

            // Compare buddy scores
            for (let j = i; j < newFriend.length; j++) {
                compatibility += (Math.abs(parseInt(userScores[j]) - parseInt(friendsData[j])));

                // Push scores to array
                // scoreArray.push(compatibility);

            // Find best match
            if (compatibility <= newFriend.friendMatcherator) {
                friendMatch.name = friendsData[i].name;
                friendMatch.photo = friendsData[i].photo;
                friendMatch.friendMatcherator = compatibility;
            }
        }
    }
        // Push entire submission to array
        friendsData.push(userData);

    // Show match
    let compatibilityFound = friendsData[friendMatch];
    res.json(compatibilityFound);

});
}

