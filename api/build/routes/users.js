"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers_1 = require("./usersCRUD/getUsers");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", getUsers_1.getUsers);
module.exports = router;
