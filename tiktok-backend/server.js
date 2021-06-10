import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import videos from "./dbModel.js";
/* ------------------------------- APP CONFIG ------------------------------- */
const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://yash:yash@cluster0.glxur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/* ------------------------------- MIDDLEWARES ------------------------------ */
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

/* -------------------------------- DB CONFIG ------------------------------- */
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
/* ------------------------------ API ENDPOINTS ----------------------------- */
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = Data;
  videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(Data);
    }
  });
});
/* ------------------------------ APP LISTENER ------------------------------ */
app.listen(port, () => console.log(`listening on localhost:${port}`));
