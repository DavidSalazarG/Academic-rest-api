/** packages */

const mongoose = require("mongoose");
const studentSchema = require("./student.schema");

/** Schema creation */
const studentGroupSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_student",
        required: true
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_group",
        required: true
    }
});

/** Schema exportation */
module.exports = studentSchema;
