// 1. Built a RESTful User Management API using Node.js, Express, and MongoDB with full CRUD functionality and basic validation.

// 2. Todo List Backend
// Create an API that lets users add, update, complete, and delete todo tasks.

// 3. Simple Blog API
// Backend for blog posts with title, content, author, and created date.

// 4. Contact Management System
// API to store contacts (name, phone, email) with CRUD operations.

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import todoRouter from './routes/todoRoute.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/v1/users', userRouter);
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect()



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});