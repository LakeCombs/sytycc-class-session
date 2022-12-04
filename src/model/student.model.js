const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    first_name: { type: String, required: [true, "First name is required"] },
    last_name: { type: String, required: [true, "Last name is required"] },
    email: {
        type: String,
        unique: [true, "Sorry! this email already exist "],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    address: { type: String },
    guaidian: { Schema.Types.ObjectId, ref: "Guaidian" },
    class: {
        type: String,required: [true, "A class is required for every Student"]
    },
    year_registered: { type: String}, 
    result : [{ Schema.Types.ObjectId, ref: "Result" }]
}, { timestamps: true});

const userModel = model("User", userSchema);


module.exports = userModel;