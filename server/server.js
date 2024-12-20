require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectdb = require("./utils/db");
const errorMiddleware = require("./middleWare/error-middleware");

app.use(express.json());

app.use("/api/auth", router);
app.use(errorMiddleware);

const PORT = 5000;

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
