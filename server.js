import express from "express";
const app = express();
const port = process.env.PORT || 8080;
import dotenv from "dotenv";
import path from "path";

//fix because __dirname not available in ES module scope
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//uses assets from root
//we use this for better syntax
app.use(express.static(__dirname + '/'));

//uses assets from js spec
// console.log(__dirname + '/js')




//loads config env.
dotenv.config();

app.get("/hello", (req, res) => {
  res.send("Hello World");
});
console.log(path.join(__dirname));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

//we need to lister otherwise server
//terminates immediately

app.listen(port, () => {
  console.log(`Server listening on port: http://localhost:${port}`);
});
