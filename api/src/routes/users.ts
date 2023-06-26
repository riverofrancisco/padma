import { getUsers } from "./usersCRUD/getUsers";

import { Router } from 'express';
const router = Router();

router.get("/", getUsers);

module.exports = router;