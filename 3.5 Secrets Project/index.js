//To see how the final website should wore dk, run "node solution.js".
//Make sure you have installed all thependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from 'body-parser';
const app = express()
const port = 3000;
var checkFlag = false;

app.use(bodyParser.urlencoded({extended: true}))

function check(req, res, next){
    var password = req.body.password
    if (password === "ILoveProgramming"){
        checkFlag = true;
    }else{
       checkFlag = false;
    }
}

app.use(check)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(checkFlag){
        res.redirect("/public/solution.html")
    }else{
        res.redirect("/public/index.html")
    }
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
