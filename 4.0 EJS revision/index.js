import express from "express"
import { type } from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

const d = new Date(); // Creates a Date object for the current time
const dayNum = d.getDay();
var day = null;
var activity = null;

function dayType(){
    // weekday
    if (dayNum < 5){
        day = "weekday";
        return(true);  
    } 
    // weekend
    else{
        day = "weekend";
        return(false);
    }

}


function activityType(){
    var dayTypeHolder = dayType();
    if (dayTypeHolder == true){
        activity = "work hard!"
    }else{
        activity = "have fun"
    }

}

activityType();

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs",{
    day: day,
    activity: activity
  });

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});