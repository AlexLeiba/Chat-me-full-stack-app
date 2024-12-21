import express from 'express';

import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';

import cors from 'cors';

import { app, server } from './lib/socket.js';

// import socketIO from 'socket.io';
// import mongoose from 'mongoose';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';

dotenv.config();

// const allowedOrigins = [
//   'http://localhost:3000', // For local development
//   'https://chat-me-full-stack-app.vercel.app', // Deployed frontend
// ];

app.use(
  cors(
    {
      origin: [
        process.env.BASE_URL,
        'https://chat-me-full-stack-app.vercel.app',
      ], // Allow requests from the frontend
      credentials: true,
    }

    // {
    //   origin: (origin, callback) => {
    //     // Allow requests with no origin (e.g., mobile apps or curl)
    //     if (!origin || allowedOrigins.includes(origin)) {
    //       callback(null, true);
    //     } else {
    //       callback(new Error('Not allowed by CORS'));
    //     }
    //   },
    //   credentials: true,
    // }
  )
); //TODO: ask gpt what it does: credentials: true

app.use(cookieParser()); // for parsing cookies, to be able to access the token from req.cookies and see the encoded user data which was stored in token

app.use(express.json()); // for parsing application/json -> req.body

app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes);

// const serverConnection = (req, res) => {
//   res.send('Hello World!');
//   connectDB();
//   app(req, res);
// };

// export default serverConnection;

const PORT = process.env.PORT || 5002;

server.listen(PORT || 5002, () => {
  console.log('Server is running on port:', PORT);
  connectDB();
});
