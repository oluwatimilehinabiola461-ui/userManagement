import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
},
{ timestamps: true });

const todoModel = mongoose.model("Todo", todoSchema);
export default todoModel;