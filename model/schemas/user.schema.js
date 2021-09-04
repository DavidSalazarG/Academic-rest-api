/** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")

/** Schema creation */
const studentSchema = new mongoose.Schema({
    
    name: {
        type: "String",
        required: true
    },
    lastname: {
        type: "String",
        required: true
    },
    username: {
        type: "String",
        required: true,
        unique: true
    },
    password: {
        type: "String",
        required: true
    },
    rol: {
        type: "Number",
        required: true
    }
});

/** Schema exportation */
studentSchema.plugin(validator)
module.exports = studentSchema;
