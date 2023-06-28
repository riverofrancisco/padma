"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getProducts_1 = require("./productsCRUD/getProducts");
const postProducts_1 = require("./productsCRUD/postProducts");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", getProducts_1.getProducts);
router.post("/", postProducts_1.postProduct);
module.exports = router;
