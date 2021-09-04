/** packages */
const express = require("express");
const config = require("config");
const bodyParser= require("body-parser")
/** app configuration */

const app = express();
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);
app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require ("./middleware/getIpAdress")
app.use("*", ipFn);

/** Methods */
app.get("/", ( req, res, next) => {
    res.send("Welcome to academic rest api.")
});
//Student Routes Loading
const studentRoutes = require("./routes/student.routes")
studentRoutes(app);  

//Teacher Routes Loading
const teacherRoutes = require("./routes/teacher.routes")
teacherRoutes(app);

const controller = require("./controller/logic/student.controller");

app.post("/student", (req, res, next) =>{
    controller.createStudent(req, res, next);
});

app.listen(port, () =>{
    console.log("Server is running...")
});

//Vehicle Routes Loading
const vehicleRoutes = require("./routes/vehicle.routes")
vehicleRoutes(app);

app.post("/vehicle", (req, res, next) =>{
    controller.createVehicle(req, res, next);
});
