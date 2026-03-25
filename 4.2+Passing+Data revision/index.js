import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var nameLength = null;

app.use(bodyParser.urlencoded({ extended: true }));

function calcNameLength(req, res, next){
    var fName = req.body["fName"];
    var lName = req.body["lName"];

    nameLength = fName.length + lName.length;
    next();
}


app.get("/", (req, res) => {
  res.render("./index.ejs");
});

app.post("/submit", calcNameLength , (req, res) => {
  res.render("./index.ejs", {
    nameLength: nameLength,
    flag: true
  })

  console.log(nameLength);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
