require("dotenv").config();
require("module-alias/register");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const productRouter = require("@/routes/product");

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/product", productRouter);
