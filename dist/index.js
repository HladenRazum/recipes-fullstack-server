"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
// import * as mongoose from "mongoose";
const cors = require("cors");
const mongodb_1 = require("mongodb");
dotenv.config();
const PORT = process.env.PORT || 9000;
const CONNECTION_URI = process.env.CONNECTION_URL;
const app = express();
const client = new mongodb_1.MongoClient(CONNECTION_URI);
app.use(bodyParser.json({
    limit: "30mb"
}));
app.use(cors());
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const database = client.db('app');
            const recipes = database.collection('recipes');
            // Query for a movie that has the title 'Back to the Future'
            const query = { name: 'Pasta' };
            const recipe = yield recipes.findOne(query);
            console.log(recipe);
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield client.close();
        }
    });
}
run().catch(console.dir);
// mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions)
//    .then(() => {
//       app.listen(PORT, () => {
//          console.log("Connected to MongoDB database...");
//          console.log(`Server is listening on port: ${PORT}...`);
//       });
//    })
//    .catch((err) => {
//       console.log(err.message);
//    });
app.get("/", (req, res) => {
    res.send("home");
});
//# sourceMappingURL=index.js.map