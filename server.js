//dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3060;

// Set up body parsing, static, and route middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

//api and html require routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
