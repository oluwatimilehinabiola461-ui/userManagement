import todoModel from "../models/todoModel";

// create a todo

export const createTodo = async (req, res) => {
    try {
        const todoData = new todoModel(req.body);
        const savedTodo = await todoData.save();
        if (!savedTodo) {
            return res.status(400).json({
                status: 'fail',
                message: "Failed to create todo",
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                savedTodo,
            }
        });
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({
            status: 'error',
            message: "Internal Server Error",
        });
    }
}

// get all todos
