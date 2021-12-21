"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT || 9000;
const mongoUri = process.env.CONNECTION_URL;
console.log(mongoUri);
const app = express();
app.use(bodyParser.json({
    limit: "30mb"
}));
app.use(cors());
app.get("/", (req, res) => {
    res.send("home");
});
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
//# sourceMappingURL=index.js.map