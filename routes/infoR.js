const { Router } = require("express");

const { getInfoCont,getPartOfInfoCont } = require("../controller/infoCont");

const router = new Router();

router.get("/info", getInfoCont);

router.get("/info/:id",getPartOfInfoCont)

module.exports = router;
