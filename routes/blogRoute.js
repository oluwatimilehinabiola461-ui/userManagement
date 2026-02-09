import {
    createBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog
} from "../controllers/blogConrollers.js";
import express from 'express';

const router = express.Router()


router.route("/")
    .get(getAllBlogs)
    .post(createBlog);

router.route("/:id")
    .put(updateBlog)
    .delete(deleteBlog);

    export default router;
