const mongoose = require("mongoose");
const logger = require("./logger");

const connectDb = async () => {
	try {
		const connecting = await mongoose.connect(process.env.MONGO_URI, {});
		logger.info(`conencted to db ${connecting?.connection.host}`);
	} catch (error) {
		logger.error(
			`an error occoured while connecting to database ${
				error?.message || error
			}`
		);
	}
};

module.exports = connectDb;
