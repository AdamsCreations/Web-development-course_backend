<<<<<<< HEAD
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from 'body-parser';
var message = null;

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

function messageEditor(req ,res ,next) {
    const d = new Date();
    let day = d.getDay();
    if (day < 5){
        message = "time to work";
    }else{
        message = "time to have fun";
    }

    next()
}

app.use(messageEditor)

const port = 3000;

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs" , {
    message: message
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
=======
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from 'body-parser';
var message = null;

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

function messageEditor(req ,res ,next) {
    const d = new Date();
    let day = d.getDay();
    if (day < 5){
        message = "time to work";
    }else{
        message = "time to have fun";
    }

    next()
}

app.use(messageEditor)

const port = 3000;

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs" , {
    message: message
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
>>>>>>> a2dcee3 (save local work)
});