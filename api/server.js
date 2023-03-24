const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB."))
  .catch(console.error);

const Todo = require("./models/Todo");

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todo/new", (req, res) => {
  const todo = new Todo({
    tect: req.body.text,
  });
  res.save();
  res.json(todo);
});

app.listen(3001, () => console.log("Server started on port 3001."));
