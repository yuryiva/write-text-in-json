const fs = require("fs");
require("dotenv").config();

// const readDataJson = () => {
  

// };

// readDataJson();

const rawTags = fs.readFileSync("data.json");
const parsedTags = JSON.parse(rawTags);

  if (rawTags === undefined) {
    alert("no tags yes");
  } else {
    
    console.log(parsedTags);
  }



const express = require("express");
const app = express();

let newTag = {
  "#newTag": "this is new tag",
};

let newTagToInsert = JSON.stringify(newTag, null, 2);
console.log(newTagToInsert);

const inserted = (err) => {
    const rawTags = fs.readFileSync("data.json");
    const parsedTags = JSON.parse(rawTags);
    const copyOfParsedTags={...parsedTags}
  if (err) {
    console.log(err);
  } else {
      
    console.log("ok");
  }
};
fs.writeFile("data.json", newTagToInsert, inserted);


const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get("/test", (request, response) => {
  response.send("test");
});
app.get("/data", (request, response) => {
  response.send(parsedTags);
});
