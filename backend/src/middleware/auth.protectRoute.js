import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
  const CHAT_ME_TOKEN = 'chat-me-token';

  const token = req.cookies[CHAT_ME_TOKEN];

  if (!token) {
    return res.cookie('chat-me-token', '', {
      maxAge: 0, //expire immediately,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // decoded is user value based on token data

    if (!decoded) {
      res.status(401).json({ message: 'You are not authorized' });
    }

    const userFromDB = await UserModel.findById(decoded.id).select(
      '-password' //to send everything except password to the client
    );

    if (!userFromDB) {
      res.status(401).json({ message: 'You are not authorized' });
    }

    // attach user object to req
    req.user = userFromDB;

    next(); // pass to next fn in middleware
  } catch (error) {
    console.log('🚀 \n\n ~ protectRoute ~ error:', error);

    return res
      .status(500)
      .json({ message: 'Internal server error on checking token' });
  }
};
