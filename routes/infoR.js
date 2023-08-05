const { Router } = require("express");

const { getInfoCont } = require("../controller/infoCont");

const router = new Router();

router.get("/info", getInfoCont);

module.exports = router;
