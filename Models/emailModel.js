const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        required: [true, "School Name is required."],
    },
    schoolEmail: {
        type: String,
        required: [true, "School Email is required."],
    }
});

module.exports = mongoose.model("emailMode",EmailSchema);