import express from "express";
import { v4 } from "uuid";
import { myfunction } from "./index2.js";
import myfunction3 from "../index3.js";

const app = express();
const fake_db = "fake db. just go with it";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("first");
  myfunction();
  myfunction3();
  console.log("second");
  res.send(
    `michael modified peru8MJMnHellow3 test2456797e , world hola 4nuevae23e3337839 added from new container vscode dev container! modifi 4 mo  ${v4()}!`
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
