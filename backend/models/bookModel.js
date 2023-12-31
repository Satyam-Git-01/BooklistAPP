const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  addedOn: {
    type: Date,
    required: true,
  },
});

const bookModel = model("books", bookSchema);
module.exports=bookModel
