const express = require("express");
const morgan = require("morgan");
const postBank = require("./public/postBank");
const postList = require('./views/postList');
const postDetails = require('./views/postDetails');
const app = express();

app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  const posts = postBank.list();
  res.send(postList.postList(posts));
});

app.get(`/posts/:id`, (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  res.send(postDetails.postDetails(post, res));
})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
