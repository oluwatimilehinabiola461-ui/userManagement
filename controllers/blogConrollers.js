import blogModel from "../models/blogModel.js";

// create a blog
export const createBlog = async (req, res) => {
    try {
        const blogData = new blogModel(req.body);
        const savedBlog = await blogData.save()
        if (!savedBlog) {
            return status(404).json({
                status: "fail",
                message: "blog not found"
            });
        }
        res.status(200).json({
            status: "success",
            data : {
                savedBlog
            }
        });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({
            status: 'error',
            message: "Internal Server Error",
        });
    }
}

// get all blog

export const getAllBlogs = async (req, res) => {
    try {
        const blog = await blogModel.find();
        if (blog.length <= 0) {
            return res.status(404).json({
                status: 'fail',
                message: "blog not found",
            });
        }
        res.status(200).json({
            status: 'success',
            count: blog.length,
            data: {
                blog,
            }
        }); 
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).json({
            status: 'error',
            message: "Internal Server Error",
        });
    }
}

// update a blog

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBlog = await blogModel.findByIdAndUpdate(id, 
            req.body, 
            { new: true });
        if (!updatedBlog) {
            return res.status(404).json({
                status: 'fail',
                message: "blog not found",
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                updatedBlog,
            }
        });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({
            status: 'error',
            message: "Internal Server Error",
        });
    }
}

// delete a blog

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await todoModel.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({
                status: 'fail',
                message: "blog not found",
            });
        }
        res.status(200).json({
            status: 'success',
            message: "blog deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({
            status: 'error',
            message: "Internal Server Error",
        });
    }
}


