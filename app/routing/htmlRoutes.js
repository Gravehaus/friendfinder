//_____      _                                ______    _                _   ______ _           _
//|  __ \    | |                              |  ____|  (_)              | | |  ____(_)         | |
//| |__) |__ | | _____ _ __ ___   ___  _ __   | |__ _ __ _  ___ _ __   __| | | |__   _ _ __   __| | ___ _ __
//|  ___/ _ \| |/ / _ \ '_ ` _ \ / _ \| '_ \  |  __| '__| |/ _ \ '_ \ / _` | |  __| | | '_ \ / _` |/ _ \ '__|
//| |  | (_) |   <  __/ | | | | | (_) | | | | | |  | |  | |  __/ | | | (_| | | |    | | | | | (_| |  __/ |
//|_|   \___/|_|\_\___|_| |_| |_|\___/|_| |_| |_|  |_|  |_|\___|_| |_|\__,_| |_|    |_|_| |_|\__,_|\___|_|
//



// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
let path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html")); //change '__dirname' to survey?//
  });

  console.log(app)


  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};