"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT || 9000;
const CONNECTION_URI = process.env.CONNECTION_URL;
const app = express();
app.use(bodyParser.json({
    limit: "30mb"
}));
app.use(cors());
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    app.listen(PORT, () => {
        console.log("Connected to MongoDB database...");
        console.log(`Server is listening on port: ${PORT}...`);
    });
})
    .catch((err) => {
    console.log(err.message);
});
app.get("/", (req, res) => {
    res.send("home");
});
//# sourceMappingURL=index.js.map