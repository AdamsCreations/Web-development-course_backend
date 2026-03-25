import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";
var title = "enter your name below";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function returnTitle(req ,res ,next) {
  var fName = req.body["fName"]
  var lName = req.body["lName"]
  var charctersNum = fName + lName
  title = charctersNum.length

  next()
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title : title
  })
});

app.use(returnTitle)

app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    title : title
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
