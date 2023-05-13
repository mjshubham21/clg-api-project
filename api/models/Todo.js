const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
  username: String,
  password: String,
});

TodoSchema.plugin(encrypt, { encryptionKey: secretKey, fields: ["password"] });

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
