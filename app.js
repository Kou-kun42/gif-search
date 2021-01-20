// Require Libraries
const express = require("express");

// Require tenorjs near the top of the file
const Tenor = require("tenorjs").client({
  // Replace with your own key
  Key: "TENOR_API_KEY", // https://tenor.com/developer/keyregistration
  Filter: "high", // "off", "low", "medium", "high", not case sensitive
  Locale: "en_US", // Your locale here, case-sensitivity depends on input
});

// App Setup
const app = express();

// Middleware
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.get("/", (req, res) => {
  console.log(req.query); // => "{ term: hey" }

  res.render("home");
});

app.get("/greetings/:name", (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render("greetings", { name });
});

// Start Server

app.listen(3000, () => {
  console.log("Gif Search listening on port localhost:3000!");
});
