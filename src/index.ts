import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as cors from "cors";

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