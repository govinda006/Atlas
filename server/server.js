require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectdb = require("./utils/db");
const errorMiddleware = require("./middleWare/error-middleware");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST,PUT,DELETE",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router);
app.use(errorMiddleware);

const PORT = 5000;

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
