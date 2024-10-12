require("dotenv").config();
require("module-alias/register");
const express = require("express");
let app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL;
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const cors = require("cors");
const productRouter = require("@/routes/product");
const expressListEndpoints = require("express-list-endpoints");

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);

  // List endpoints
  const endpoints = expressListEndpoints(app);
  console.log("Available Endpoints:");
  endpoints.forEach((endpoint) => {
    console.log(`${endpoint.methods.join(", ")} ${endpoint.path}`);
  });
});

app.get("/", (req, res) => {
  return res.send("Hello World");
});

const options = {
  definition: {
    openapi: "3.0.0",
    servers: [
      {
        url: `${baseUrl}:${port}`,
      },
    ],
    info: {
      title: "Product API Documentation",
      description:
        "This is the API documentation of the product to fulfill phincon academy assignment 3\n \nSome useful links:\n - [API Product repository by Fioreza Radhin Naufal](https://github.com/Fiorezarn/Assigment3_FiorezaRadhinNaufal.git)\n - [Swagger Documentation](https://swagger.io/tools/swagger-ui/)",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const spacs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs));
app.use("/product", productRouter);
