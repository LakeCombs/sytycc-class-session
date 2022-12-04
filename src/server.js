require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const PORT = 1222;
const connectDb = require("./utils/db");
const logger = require("./utils/logger");

connectDb();
const app = express();

app.use(cors()).use(helmet());

app.listen(process.env.PORT, () => {
	logger.info(` hey i am running on this port ${PORT} `);
});
