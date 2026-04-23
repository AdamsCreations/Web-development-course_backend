import express, { request } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Adam Salah";
const yourPassword = "123";
const yourAPIKey = "2a3aed62-afab-4591-954b-a35798d21b55";
const yourBearerToken = "d107fdce-147b-4db8-9d84-2e59bc2b2d99";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.

  try{
    const request = await axios.get(API_URL+"random");
    const response = request.data;
    res.render("index.ejs", {
      content: JSON.stringify(response)
    })
  }catch(error){
    console.log(error.message)
    res.render("index.ejs", {
      content: error.message
    })
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908

  try{

   const request = await axios.get(API_URL+"all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      }
    });

   const response = request.data;

   res.render("index.ejs", {
    content: JSON.stringify(response)
   })

  }catch(error){
    console.log(error.message)
    res.render("index.ejs", {
      content: error.message
    })
  }


  
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  try{
    const request = await axios.get(API_URL+"filter", {
      params: {
        "score[gte]": 5,
        apiKry: yourAPIKey
      }
    });

    const response = request.data;

    res.render("index.ejs", {
      content: JSON.stringify(response)
    })
  }catch(error){
    res.render("index.ejs", {
      content: error.message
    })
  }
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
