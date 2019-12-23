// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information
// ===============================================================================

let friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {

        // variable to represent the user's input scores:
        let scores = req.body.scores;
        // array and variable for use in the below comparison:
        let differencesArray = [];
        let match = 0;

        // loops through the people in the friends.js file:

        for (let i = 0; i < friendData.length; i++) {

            // sets a difference variable to zero
            let difference = 0;
            // loops through the user's input scores:
            for (let o = 0; o < scores.length; o++) {
                // and uses Math.abs() to calculate the difference between each questions' score:
                difference += (Math.abs(parseInt(friendData[i].scores[o]))) - parseInt(scores[o]);
            }
            // pushes the difference to the differences array, creating an array of the differences between scores
            differencesArray.push(difference);
        }
        // loop through the differencesArray
        for (let i = 0; i < differencesArray.length; i++) {
            if (differencesArray[i] <= differencesArray[match]) {
                match = i;
            }
        }

        let bestFriend = friendData[match];
        res.json(bestFriend);

        friendData.push(req.body);
        res.json(true);

    });

};