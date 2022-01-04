import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as cors from "cors";
import { connectDB } from "./db";
import { notFound } from "./middlewares/not-found";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
if (process.env.NODE_ENV === "development") {
   app.use(morgan("dev"));
}

// Routes
import { recipesRouter } from "./routes/recipes";
import { categoriesRouter } from "./routes/categories";
import { usersRouter } from "./routes/users";

app.use("/recipes", recipesRouter);
app.use("/categories", categoriesRouter);
app.use("/users", usersRouter);
app.use(notFound);

app.listen(PORT, () => {
   console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
