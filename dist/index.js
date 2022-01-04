"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const db_1 = require("./db");
const not_found_1 = require("./middlewares/not-found");
dotenv.config();
db_1.connectDB();
const PORT = process.env.PORT || 9000;
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
// Routes
const recipes_1 = require("./routes/recipes");
const categories_1 = require("./routes/categories");
const users_1 = require("./routes/users");
app.use("/recipes", recipes_1.recipesRouter);
app.use("/categories", categories_1.categoriesRouter);
app.use("/users", users_1.usersRouter);
app.use(not_found_1.notFound);
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
//# sourceMappingURL=index.js.map