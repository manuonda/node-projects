const {Router} = require('express')

const {create} = require("../controllers/auth")

const router = Router();

router.post("/auth", create);

module.exports =  router;