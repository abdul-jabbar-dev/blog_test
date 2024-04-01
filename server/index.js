import express from "express";
import cors from "cors";
import { appendFileSync } from "fs";
const app = express();
app.use(cors());

app.use(express.json());
app.get("/post", (req, res) => {
  console.log(req.body);
  res.send("asdfasdf");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("asdfasdf");
});

app.post("/upload", (req) => {
  const name = req.query.fileName;
  req.on("data", (chunk) => {
    console.log(chunk)
    appendFileSync(name, chunk); // append to a file on the disk
  });
});

app.listen(4000, () => {
  console.log("server is running at : " + 4000);
});
