import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as cors from "cors";
import postRoutes from "../routes/posts";

dotenv.config();

const PORT = process.env.PORT || 9000;
const CONNECTION_URI = process.env.CONNECTION_URL;

// routes
const app = express();
app.use(bodyParser.json({
   limit: "30mb"
}));
app.use(cors());
app.use("/posts", postRoutes);

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions)
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

