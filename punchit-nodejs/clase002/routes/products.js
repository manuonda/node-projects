const {Router} = require("express")
const router = Router();
const { all , create, single } =  require("../controllers/products")
const { validateCreate  } = require("../middlewares/actions/product")
const { validateId } = require("../mid")


router.get("/", all );
router.post("/", validateCreate, create)
router.get("/:id", single)

module.exports = router;