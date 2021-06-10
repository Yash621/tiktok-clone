import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
/* ------------------------------- APP CONFIG ------------------------------- */
const app = express();
const port = 9000;
const connection_url =
  "mongodb+srv://yash:yash@cluster0.glxur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
/* ------------------------------- MIDDLEWARES ------------------------------ */

/* -------------------------------- DB CONFIG ------------------------------- */

/* ------------------------------ API ENDPOINTS ----------------------------- */
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => {
  res.status(200).send(data);
});
/* ------------------------------ APP LISTENER ------------------------------ */
app.listen(port, () => console.log(`listening on localhost:${port}`));
