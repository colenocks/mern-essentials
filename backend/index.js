import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) =>
  res.send(`Hey there, Im running on port on ${PORT}`)
);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
