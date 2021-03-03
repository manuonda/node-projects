const {Router} = require('express');
const router = Router();

router.post('/create', create);
router.get('/list', list);

module.exports = router;