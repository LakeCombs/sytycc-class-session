const { Schema, model } = require("mongoose");

const guaidianSchema = new Schema(
	{
		first_name: { type: String, require: true },
		last_name: { type: String, require: true },
		ward: { type: Schema.Types.ObjectId, ref: "Student" },
		address: { type: String, require: true },
		phone_number: {
			type: String,
			require: [true, "Phone number is required"],
			match: [
				/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
				"Pleae enter phone number",
			],
		},
	},
	{ timestamps: true }
);

const guidianModel = model("Guidian", guaidianSchema);

module.exports = guidianModel;
