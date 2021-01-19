const path = require("path");

module.exports = (app) => {
	//HTML get requests

	//stylesheet for html
	app.get("styles", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
	});
	//paths for index and notes files, will default to index
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
	app.get("/notes", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/notes.html"));
	});
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
};
