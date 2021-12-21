import * as express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 9000;
const app = express();

app.get("/", (req, res) => {
   res.send("home");
});

app.listen(PORT, () => {
   console.log(`Server is listening on port: ${PORT}`);
});