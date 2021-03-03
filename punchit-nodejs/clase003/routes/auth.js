const { expression } = require("@hapi/joi");

const { Router } = require('express')

const router = Router();

const {create , authenticate } = require('../controllers/auth')
router.post('/create', create);
router.post('/login', authenticate);

module.exports =  router;