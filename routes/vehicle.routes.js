const controller = require("../controller/logic/vehicle.controller");


module.exports = (app) => {
    console.log("Loading routes of vehicle")
    app.get("/vehicle", (req, res, next) => {
        controller.getAll(req, res, next);
    });
    app.get("/vehicle/bychassis/:chassisSerialNumber", (req, res, next) => {
        console.log("Getting vehicle by chassis serial number")
        controller.getByChassis(req, res, next);
    });
    app.post("/vehicle", (req, res, next) => {
        controller.createVehicle(req, res, next);
    });
    app.put("/vehicle", (req, res, next) => {
        controller.vehicleUpdate(req, res, next);
    });
    app.delete("/vehicle", (req, res, next) => {
        controller.deleteVehicle(req, res, next);
    });
};