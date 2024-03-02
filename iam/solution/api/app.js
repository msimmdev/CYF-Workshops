const express = require("express");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
const oidcVerifyToken = require("./middleware/oidc-verify-token");

const catRouter = require("./routes/cats");

const app = express();

app.use(cors());

app.use(
  oidcVerifyToken({
    authority:
      "https://login.microsoftonline.com/38fe53c5-4996-4c46-8a0d-b2ef2eb9fdb7/v2.0",
    validIss: "https://sts.windows.net/38fe53c5-4996-4c46-8a0d-b2ef2eb9fdb7/",
    validAud: "api://95bcf529-1242-4ed2-874f-867e9f676370",
  })
);

app.use(logger("dev"));
app.use(express.json());

app.use("/cats", catRouter);

module.exports = app;
