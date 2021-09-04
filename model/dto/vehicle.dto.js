/** packages */

const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");
/** usign schemas */

const schema = require("../schemas/vehicle.schema")
db();
schema.statics = {
    create: function (data, cb){
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function (query, cb){
        this.find(query, cb);
    },
    getByChassis: function (query, cb){
        this.find(query, cb);
    },
    update: function(query, data, cb){
        this.fineOneAndUpdate(query, {$set: data}, {new: true}, cb);
    },
    delete: function(query,cb){
        this.findOneAndDelete(query);
    }  
};

const dto = mongoose.model("coll_vehicles", schema);
module.exports = dto;