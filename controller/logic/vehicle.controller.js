/** dto */

const vehicleDto = require("../../model/dto/vehicle.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");

/**Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createVehicle = (req, res, next) =>{
    console.log(req.body);
    let vehicle = {
        brand: req.body.brand,
        model: req.body.model,
        generation: req.body.generation,
        color: req.body.color,
        chassisSerialNumber: req.body.chassisSerialNumber,
        engineCC: req.body.engineCC,
        equipment: req.body.equipment
    };
    vehicleDto.create(vehicle, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        let r = config.get("roles").vehicle;
        let user = {
            name: vehicle.brand,
            lastname: vehicle.model,
            username: vehicle.model,
            password: helper.EncryptPassword(req.body.password),
            rol: r
        }
        userDto.create(user, (err, u) => {
            if(err){
                vehicleDto.delete({_id: data._id}, (err, data) =>{
                    console.log
                })//("Deleting due to not user creation.")
                return res.status(400).json(
                    {
                        error: err
                    }
                )
            }
            notHelper.sendSMS(vehicle.model);
            res.status(201).json(
                {
                    info: data
                }
            );
        });
    });
};

exports.updateVehicle = (req, res, next) =>{
    let vehicle = {
        brand: req.body.brand,
        model: req.body.model,
        generation: req.body.generation,
        color: req.body.color,
        chassisSerialNumber: req.body.chassisSerialNumber,
        engineCC: req.body.engineCC,
        equipment: req.body.equipment
    };
    vehicleDto.update({_id: req.body.id}, vehicle, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) =>{
    
    vehicleDto.getAll({}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.getByChassis = (req, res, next) =>{
    
    vehicleDto.getByChassis({chassisSerialNumber: req.params.chassisSerialNumber}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleteVehicle = () =>{
    vehicleDto.delete({_id: req.body.id}, (err, data)=> {
        if(err){
            return res.status(400).json(
                {
                    error: er
                }
            );
        }
        res.status(204).json();
    });
}
