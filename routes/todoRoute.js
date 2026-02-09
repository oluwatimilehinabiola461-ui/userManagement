import {
    createTodo,
    getAllTodos,
    updateTodo,
    deleteTodo,
} from "../controllers/to-doController.js";
import express from 'express';

const router = express.Router();

router.route("/")
    .get(getAllTodos)
    .post(createTodo);

router.route("/:id")
    .put(updateTodo)
    .delete(deleteTodo);

export default router;