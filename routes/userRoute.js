import {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
} from "../controllers/userController.js";
import express from 'express';

const router = express.Router();

router.route("/")
    .get(getAllUsers)
    .post(createUser);

router.route("/:id")
    .put(updateUser)
    .delete(deleteUser);

export default router;