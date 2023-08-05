const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const { error } = require("console");

const { userRoute } = require("../routes/usersR");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //* bodyParser
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  //* endof bodyParser

  //*dotenv config
  require("dotenv").config();
  //* endof dotenv config

  //* connect in mongodb
  require("../mongoCon/mongobd.ts");
  //* endof connect in mongodb

  //* routes
  server.use("/api", require("../routes/usersR"));
  server.use('/api',require('../routes/infoR'))
  //* routes

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
