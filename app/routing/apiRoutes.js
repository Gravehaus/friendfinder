// The apiRoutes.js file includes two basic routes for app.get function and app.post function which used for displaying a JASON data and incoming survey results of all possible pokemon:
// The app.post(in the apiRoutes.js) used to handle the compatibility logic.


var pokemon = require('../data/pokemon.js');

// Routing the apiRoutes with the app.get and app.post functions
module.exports = function (app) {
  // The app.get request handles when user 'visits' a page
  app.get('/api/pokemon', function (req, res) {
    res.json(pokemon);
  });
  // The app.post request handles when a user submits a form and thus submits data to the survey
  app.post('/api/pokemon', function (req, res) {
    // loop through all of the possible options
    var bestMatch = {
      name: "",
      photo: "",
      pokemonDifference: 1000
    };

    // To take the result of the user's survey POST and parse it
    var userData = req.body;
    var userScores = userData.scores;
    // To take the results of the user's name and photo, other than the survey questions, to post and parse it
    var userName = userData.name;
    var userPhoto = userData.photo;

    // The variable used to calculate the difference b/n the user's socres and the scores of each user
    var totalDifference = 0;

    //loop through the pokemon data array of objects to get each pokemon scores
    for (var i = 0; i < pokemon.length - 1; i++) {
      console.log(pokemon[i].name);
      totalDifference = 0;

      //loop through that pokemon score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
      for (var j = 0; j < 10; j++) {
        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(pokemon[i].scores[j]));
        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.pokemonDifference) {

          // Reset the bestMatch to be the new friend.
          bestMatch.name = pokemon[i].name;
          bestMatch.photo = pokemon[i].photo;
          bestMatch.pokemonDifference = totalDifference;
        }
      }
    }

    // The push method use to save user's data to the database
    pokemon.push(userData);

    //The res.json method will return a JSON data with the user's match which was looped through pokemon data array.
    res.json(bestMatch);
  });
};