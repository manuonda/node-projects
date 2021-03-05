const {Router} = require('express');
const router = Router();
const { all , create  } = require('../controllers/purchase')

//router.post('/create', create);
router.get('/list', all);
router.post('/create', create);

module.exports = router;