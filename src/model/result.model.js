const { Schema, model } = require("mongoose");

const resultSchema = new Schema(
	{
		student: { type: Schema.Types.ObjectId, ref: "Student" },
		subject: { type: Schema.Types.ObjectId, ref: "Subject" },
		class: {
			type: String,
			required: [true, "A class is required to create a student result"],
		},
		year: { type: String },
		term: { type: String, enum: ["First", "Second", "Third"] },
	},
	{ timestamps: true }
);

const resultModel = model("Result", resultSchema);

module.exports = resultModel;
