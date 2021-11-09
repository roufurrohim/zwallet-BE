const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const usersRouter = require("./src/routers/users.route");
const transactionsRouter = require("./src/routers/transactions.route");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(usersRouter);
app.use(transactionsRouter);
app.use(express.static(__dirname + "/uploads"));

const port = 4004;
app.listen(port, () => {
  console.log(`Service running on port ${port}`);
});

module.exports = app;
