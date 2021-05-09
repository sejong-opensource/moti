import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { getEmail } from "./getEmail";
const app = express();
const port = 3002;

// app.all("/*", (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Origin", "X-Requested-With");
//   next();
// });
app.use(bodyParser.json());
app.use(cors());
app.post("/getEmail", async (req, res) => {
  const result = await getEmail(req.body.email, req.body.password, req.body.host);
  res.send(result);
  res.status(200);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
