import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import { connectDB } from "./db";
// import * as cors from "cors";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 9000;
const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
if (process.env.NODE_ENV === "development") {
   app.use(morgan("dev"));
}

// Routes
import { recipesRouter } from "./routes/recipes";
import { categoriesRouter } from "./routes/categories";

app.use("/recipes", recipesRouter);
app.use("/categories", categoriesRouter);

app.listen(PORT, () => {
   console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
