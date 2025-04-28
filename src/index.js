import express from "express";

const app = express();
const fake_db = "fake db. just go with it";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello, world hola 4nuevae23e3337839 added from new container vscode dev container!"
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
