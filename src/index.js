import express from "express";

const app = express();
const fake_db = "fake db. just go with it";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, world hola MODIFIED");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
