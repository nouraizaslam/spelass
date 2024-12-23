const router = require("express").Router();
const apiInterface = require('./apiInterface');

router.use("/api-interface", apiInterface);

module.exports = router;
