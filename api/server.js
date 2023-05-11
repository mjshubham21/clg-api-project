const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const encrypt = require("mongoose-encrypt");

const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB."))
  .catch(console.error);
// ?retryWrites=true&w=majority
const Todo = require("./models/Todo");

// const apiKey = process.env.API_KEY;

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todo/new", (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  todo.save();
  res.json(todo);
});

app.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.get("/todo/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  // const updatedTodo = await Todo.findById(req.params.id);
  res.json(todo);
});

app.put("/todo/update/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.text = req.body.text;
  todo.save();
  res.json(todo);
});

// Route for user signup
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const todo = new Todo({
    // Set the username and password fields
    username: username,
    password: password,
  });
  todo.save();
  res.json({ message: "User signed up successfully" });
});

// Route for user login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Todo.findOne({ username: username });
  if (user && user.password === password) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

app.listen(3001, () => console.log("Server started on port 3001."));
