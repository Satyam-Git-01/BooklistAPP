const express = require("express");
const bookRouter = require("./routes/bookRouter");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.listen(5000, () => {
  console.log("Listening on PORT 5000");
});

mongoose
  .connect("mongodb://localhost:27017/bookstore")
  .then((response) => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log("Error While DB Connection");
  });
app.use("/book", bookRouter);
