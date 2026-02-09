import userModel from "../models/userModel.js";


// get all users
export const getAllUsers = async (req, res) => {
 try {
        const users = await userModel.find();
        if (users.length <= 0) {
            return res.status(404).json({
                status: 'fail',
                message: "users not found",
            });
        }
        res.status(200).json({
            status: 'success',
            count: users.length,
            data: {
                users,
            }
        });

    }catch (error) {
        res.status(500).json({
            status: 'error',
            message: "Internal Server Error",
        });
    }
}

// create a user
export const createUser = async (req, res) => {
    try {
        const userData = new userModel(req.body);
        const { email } = userData;
        const existingUser = await userModel.findOne({email});

        if (existingUser) {
            return res.status(400).json({
                status: 'fail',
                message: "Email already exists",
            });
        }
        const savedUser = await userData.save();
        res.status(200).json({
            status: 'success',
            data: {
                user: savedUser,
            }
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            status: 'error',
            message: "Internal Server Error",
        });
    }
}

// update user
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userToUpdate = await userModel.findById(id);

    if (!userToUpdate) {
        return res.status(404).json({
            status: "fail",
            message: "User not found"
        });
    }
    // if (req.body.name) userToUpdate.name = req.body.name;
    // if (req.body.email) userToUpdate.email = req.body.email;
    // if (req.body.password) userToUpdate.password = req.body.password;

    Object.assign(userToUpdate, req.body)
    const updatedUser = await userToUpdate.save();

    res.status(200).json({
        status: "success",
        message: "User updated successfully",
        data: { 
        updatedUser
    }
    });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Internal server error"
        });
    }
};

// delete user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id);

    if (!deletedUser) {
        return res.status(404).json({
        status: "fail",
        message: "User not found"
        });
    }

    res.status(200).json({
        status: "success",
        message: "User deleted successfully",
        data: { 
            deletedUser
        }
    });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Internal server error"
        });
    }
};
