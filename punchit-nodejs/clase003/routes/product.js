const {Router} = require("express")
const router = Router()
const ProductController = require('../controllers/product')


router.get("/", ProductController.list);

module.exports = router;
