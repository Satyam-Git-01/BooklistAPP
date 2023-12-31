const express = require("express");
const { nanoid } = require("nanoid");
const bookModel = require("../models/bookModel");

const bookRouter = express.Router();

bookRouter.get("/", async (req, res) => {
  const book = await bookModel.find();
  return res.send(book);
});

bookRouter.get("/:id", async (req, res) => {
  const book = await bookModel.findOne({ id: req.params.id });
  return res.send(book);
});

bookRouter.post("/", async (req, res) => {
  const book = {
    id: nanoid(),
    name: req.body.name,
    writer: req.body.writer,
    addedOn: Date.now(),
  };
  const result = await bookModel.create(book);
  return res.send("POST");
});
bookRouter.put("/:id", async (req, res) => {
  const result = await bookModel.updateOne(
    { id: req.params.id },
    { $set: { name: req.body.name, writer: req.body.writer } }
  );
  return res.send(result);
});
bookRouter.delete("/:id", async (req, res) => {
  const result = await bookModel.deleteOne({ id: req.params.id });
  return res.send("DLETE");
});

module.exports = bookRouter;
