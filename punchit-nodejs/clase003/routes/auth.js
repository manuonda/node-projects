const { expression } = require("@hapi/joi");

const { Router } = require('express')

const router = Router();

const {create , authenticate } = require('../controllers/auth')
router.use('/create', create);
router.use('/login', authenticate);

module.exports =  router;