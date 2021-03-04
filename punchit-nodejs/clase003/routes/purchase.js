const {Router} = require('express');
const router = Router();
const { all } = require('../controllers/purchase')

//router.post('/create', create);
router.get('/list', all);

module.exports = router;