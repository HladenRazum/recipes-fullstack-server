"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const posts_1 = require("../routes/posts");
const recipes_1 = require("../routes/recipes");
dotenv.config();
const PORT = process.env.PORT || 9000;
const CONNECTION_URI = process.env.CONNECTION_URL;
// routes
const app = express();
app.use(bodyParser.json({
    limit: "30mb"
}));
// app.use(cors());
app.use("/posts", posts_1.default);
app.use("/recipes", recipes_1.default);
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(startServer)
    .catch((err) => {
    console.log(err.message);
});
// mongoose.set("useFindAndModify": false);
function startServer() {
    app.listen(PORT, () => {
        console.log("Connected to MongoDB database...");
        console.log(`Server is listening on port: ${PORT}...`);
    });
}
//# sourceMappingURL=index.js.map