const router = require("express").Router();
const { requestValidator } = require("../../../middlewares");

const { gatewayV } = require("./validations");

const {
  gateway,
} = require("../../../controllers/apiInterfaces.controller");

router.post('/gateway', requestValidator(gatewayV), gateway)

module.exports = router;
