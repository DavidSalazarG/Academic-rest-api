/** packages */

const mongoose = require("mongoose");
//const validator = require("mongoose-unique-validator");

/** Schema creation */
const vehicleSchema = new mongoose.Schema({
    brand: {
        type: "String",
        required: true,
    },
    model: {
        type: "String",
        required: true
    },
    generation:{
        type: "String",
        required: true
    },
    color: {
        type: "String",
        required: true
    },
    chassisSerialNumber: {
        type: "String",
        required: true,
    },
    engineCC: {
        type: "String",
        required: true
    },
    equipment: {
        type: "String",
        required: true
    }
});

/** Schema exportation */
//vehicleSchema.plugin(validator)
module.exports = vehicleSchema;
