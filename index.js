// 1. Built a RESTful User Management API using Node.js, Express, and MongoDB with full CRUD functionality and basic validation.

// 2. Todo List Backend
// Create an API that lets users add, update, complete, and delete todo tasks.

// 3. Simple Blog API
// Backend for blog posts with title, content, author, and created date.

// 4. Contact Management System
// API to store contacts (name, phone, email) with CRUD operations.

import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import todoRouter from './routes/todoRoute.js';
import blogRouter from './routes/blogRoute.js'


const app = express();
app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/todos', todoRouter);
app.use('/api/v1/blogs', blogRouter)
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
// mongoose.connect()



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});