"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db_1 = require("./db");
const not_found_1 = require("./middlewares/not-found");
const cross_origin_1 = require("./middlewares/cross-origin");
dotenv.config();
db_1.connectDB();
const PORT = process.env.PORT || 9000;
const app = express();
app.use(cross_origin_1.allowCors);
app.use(bodyParser.json({ limit: "30mb" }));
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
// Routes
const recipes_1 = require("./routes/recipes");
const categories_1 = require("./routes/categories");
const users_1 = require("./routes/users");
const auth_1 = require("./routes/auth");
app.use("/api/recipes", recipes_1.recipesRouter);
app.use("/api/categories", categories_1.categoriesRouter);
app.use("/api/users", users_1.usersRouter);
app.use("/api/", auth_1.authenticationRouter);
app.use("/api/", auth_1.authenticationRouter);
app.use(not_found_1.notFound);
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
//# sourceMappingURL=index.js.map