import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let name = "", email = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  name = req.body["name"];
  email = req.body["email"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<p>Hello Everyone I'm <b>${name}</b> And my email address is <b>${email}</b><p>`);
});

app.listen(port, () => {
  console.log(`Server started successfully at the server ${port}`);
});
