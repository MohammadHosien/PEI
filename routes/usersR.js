const { Router } = require("express");

const {creareUserCont}=require('../controller/userCont');

const router = new Router();

router.get("/register",creareUserCont);

module.exports=router;


