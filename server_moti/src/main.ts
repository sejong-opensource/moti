import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { getMail } from "./getMail";
const app = express();
const port = 5000;

// app.all("/*", (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Origin", "X-Requested-With");
//   next();
// });
app.use(bodyParser.json());
app.use(cors());
app.post("/getEmail", async (req, res) => {
  try {
    const result = await getMail(req.body.email, req.body.password, req.body.host);
    res.send(result);
    res.status(200);
    console.log("done at ", new Date().toTimeString());
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
// getMail("98gudcks@gmail.com", "ehlswkd1!!", "imap.gmail.com").then(results => console.log(results));
