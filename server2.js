const fs = require("fs");
const express = require("express");

const data = fs.readFileSync("words.json");
let words = JSON.parse(data);
// console.log(words);

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.use(express.static("website"));

app.get("/add/:word/:score", addWord);

function addWord(request, response) {
  let data = request.params;
  let word = data.word;
  let score = Number(data.score);
  let reply;

  if (!score) {
    let reply = {
      msq: "Score is required",
    };
    response.send(reply);
  } else {
    words[word] = score;
    
    let data = JSON.stringify(words, null, 2);
    fs.writeFile("words.json", data, finished);

    function finished(err) {
      console.log("all set.");
      reply = {
        word: word,
        score: score,
        status: "success",
      };
      response.send(reply);
    }
  }
}

app.get("/all", (req, res) => {
  res.send(words);
});
