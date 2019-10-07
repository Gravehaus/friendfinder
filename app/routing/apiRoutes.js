//_____      _                                ______    _                _   ______ _           _
//|  __ \    | |                              |  ____|  (_)              | | |  ____(_)         | |
//| |__) |__ | | _____ _ __ ___   ___  _ __   | |__ _ __ _  ___ _ __   __| | | |__   _ _ __   __| | ___ _ __
//|  ___/ _ \| |/ / _ \ '_ ` _ \ / _ \| '_ \  |  __| '__| |/ _ \ '_ \ / _` | |  __| | | '_ \ / _` |/ _ \ '__|
//| |  | (_) |   <  __/ | | | | | (_) | | | | | |  | |  | |  __/ | | | (_| | | |    | | | | | (_| |  __/ |
//|_|   \___/|_|\_\___|_| |_| |_|\___/|_| |_| |_|  |_|  |_|\___|_| |_|\__,_| |_|    |_|_| |_|\__,_|\___|_|
//


// The apiRoutes.js file includes two basic routes for app.get function and app.post function which used for displaying a JSON data and incoming survey results of all possible pokemon:
// The app.post(in the apiRoutes.js) used to handle the compatibility logic.


let pokemon = require('../data/pokemon.js');



// Routing the apiRoutes with the app.get and app.post functions
module.exports = function (app) {
  // The app.get request handles when user 'visits' a page
  app.get('/api/pokemon', function (req, res) {
    res.json(pokemon);
  });
  // The app.post request handles when a user submits a form and thus submits data to the survey.
  app.post('/api/pokemon', function (req, res) {
    // loop through all of the possible options
    let bestMatch = {
      name: "",
      photo: "",
      pokemonDifference: 1000
    };

    let userData = req.body;
    let userScores = userData.scores;
    let userName = userData.name;
    let userPhoto = userData.photo;

    // The variable used to calculate the difference b/n the user's scores and the scores of each user
    let totalDifference = 0;

    //loop through the pokemon data array of objects to get each pokemon scores
    for (let i = 0; i < pokemon.length - 1; i++) {
      console.log(pokemon[i].name);
      totalDifference = 0;

      //loop through that pokemon score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
      for (let j = 0; j < 10; j++) {
        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(pokemon[i].scores[j]));
        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.pokemonDifference) {

          // Reset the bestMatch to be the new friend.
          bestMatch.name = pokemon[i].name;
          bestMatch.photo = pokemon[i].photo;
          bestMatch.info = pokemon[i].info; //**********REMOVE IF NOT WORKING!*******/////////////
          bestMatch.pokemonDifference = totalDifference;
        }
      }
    }

    // Saving users input to our database
    pokemon.push(userData);
    console.log(pokemon)

    //The res.json method will return a JSON data with the user's match which was looped through pokemon data array.
    res.json(bestMatch);

  });
};