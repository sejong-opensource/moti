"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getMail_1 = require("./getMail");
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
    const result = await getMail_1.getMail(req.body.email, req.body.password, req.body.host);
    res.send(result);
    res.status(200);
    console.log("done");
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
// getMail("98gudcks@gmail.com", "ehlswkd1!!", "imap.gmail.com").then(results => console.log(results));
