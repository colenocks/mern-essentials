import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/soccerRoutes";

const app = express();
const PORT = 4000;

//mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS setup
app.use(cors());

routes(app);

app.get("/", (req, res) =>
  console.log(`Hey there, Im running on port on ${PORT}`)
);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
