const {Router} = require("express")
const router = Router()
const ProductController = require('../controllers/product')
const { validateCreate}  = require('../middlewares/action/productAction')

router.get("/", ProductController.list);
router.post("/add", validateCreate, ProductController.add);
module.exports = router;
