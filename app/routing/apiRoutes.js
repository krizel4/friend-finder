// HW instructions
// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const friendsData = require("..app/data/friends");

// Routes
module.exports = function apiRoute (app) {

    // Display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        return res.json(data);
    });

    // Compatibility logic.
    app.post("/api/friends", function (req, res) {
        return res.json(data);

        let newFriend = req.body.scores;
        let scoreArray = [];
        let friendMatch;

    })

}


