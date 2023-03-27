const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://mjshubham21:Mj21Wakandan@api-project.luexi89.mongodb.net/ToDoListDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to DB."))
  .catch(console.error);
// ?retryWrites=true&w=majority
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

app.delete("/tot/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.get("/todo/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  todo.jason(todo);
});

app.listen(3001, () => console.log("Server started on port 3001."));
