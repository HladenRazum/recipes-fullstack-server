import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as cors from "cors";
import { connectDB } from "./db";
import { notFound } from "./middlewares/not-found";
// import { allowCors } from "./middlewares/cross-origin";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 9000;
const app = express();
app.use(cors({
   origin: "http://localhost:3000",
}));

app.use(bodyParser.json());
if (process.env.NODE_ENV === "development") {
   app.use(morgan("dev"));
}

// Routes
import { recipesRouter } from "./routes/recipes";
import { categoriesRouter } from "./routes/categories";
import { usersRouter } from "./routes/users";
import { authenticationRouter } from "./routes/auth";

app.use("/api/recipes", recipesRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", usersRouter);
app.use("/api/", authenticationRouter);
app.use("/api/", authenticationRouter);

app.use(notFound);

app.listen(PORT, () => {
   console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
