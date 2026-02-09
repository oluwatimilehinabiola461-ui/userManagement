import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
            unique: true,
        },
    },
    { timestamps: true },

);

const userModel = mongoose.model("User", userSchema);

export default userModel;