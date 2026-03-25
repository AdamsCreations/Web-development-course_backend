import express from "express"
const app = express();

app.get("/", (req,res) =>{
    res.send("hello world");
})

app.get("/contact", (req,res) =>{
    res.send("hello contact");
})

app.get("/about", (req,res) =>{
    res.send("about")
})
app.listen("3000",function(){
    console.log("listening on port 3000")
})

