const fs = require("fs");

const fetchData = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

const logNot = (note) => {
  console.log(`note title: ${note.title}`);
  console.log(`note body: ${note.body}`);
};

const getAll = () => {
  let notes = fetchData();
  notes.forEach((element) => {
    logNot(element);
  });
};

const addNote = (title, body) => {
  let notes = fetchData();
  let note = { title, body };

  const existe = notes.filter((note) => note.title === title);
  console.log("existe", existe);
  console.log("existe.length", existe.length);
  if (existe.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNot(note);
  } else {
    console.log("note already exists");
  }
};

const getOneNote = (title) => {
  let notes = fetchData();
  const note = notes.find((n) => n.title === title);

  if (note) {
    logNot(note);
  } else {
    console.log(`Note with title '${title}' not found.`);
  }
};

const removeNote = (title) => {
  let notes = fetchData();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (filteredNotes.length < notes.length) {
    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
    console.log(`Note with title '${title}' removed.`);
  } else {
    console.log(`Note with title '${title}' not found.`);
  }
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getOneNote,
};
