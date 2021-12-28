"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db_1 = require("./db");
// import * as cors from "cors";
dotenv.config();
db_1.connectDB();
const PORT = process.env.PORT || 9000;
const app = express();
app.use(bodyParser.json({ limit: "30mb" }));
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
// Routes
const recipes_1 = require("./routes/recipes");
const categories_1 = require("./routes/categories");
app.use("/recipes", recipes_1.recipesRouter);
app.use("/categories", categories_1.categoriesRouter);
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
//# sourceMappingURL=index.js.map