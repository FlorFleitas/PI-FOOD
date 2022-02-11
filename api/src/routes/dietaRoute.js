const { Router } = require("express");
const { dietType } = require("../Controllers/dietaControllers");


const dietRoute = Router();

dietRoute.get("/types", dietType);



module.exports = dietRoute;