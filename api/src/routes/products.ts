import { getProducts } from "./productsCRUD/getProducts";
import { postProduct } from "./productsCRUD/postProducts";
import { Router } from 'express';
const router = Router();

router.get("/", getProducts);
router.post("/", postProduct)

module.exports = router;