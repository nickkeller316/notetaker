//require notes database
const notes = require("../db/db.json");
const fs = require("fs");

module.exports = (app) => {
	//get request for json data from db
	app.get("/api/notes", (req, res) => {
		fs.readFileSync("./db/db.json", "utf8");
		return res.json(notes);
	});

	//post function to post new notes
	app.post("/api/notes", (req, res) => {
		const newNote = req.body;
		const noteID = notes.length.toString();
		newNote.id = noteID;
		notes.push(newNote);
		return res.json(newNote);
	});

	//deleting notes using note id
	app.delete("/api/notes/:id", (req, res) => {
		const id = req.params.id.toString();
		for (i = 0; i < notes.length; i++) {
			if (notes[i].id == id) {
				res.send(notes[i]);
				notes.splice(i, 1);
			}
		}
	});
};
