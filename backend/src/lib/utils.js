import jwt from 'jsonwebtoken';
export const generateToken = (userPayload, res) => {
  const token = jwt.sign(
    {
      id: userPayload._id,
      email: userPayload.email,
      fullName: userPayload.fullName,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d', // 7 days
    }
  );

  // Create JWT token //
  res.cookie('chat-me-token', token, {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    httpOnly: true, //preventing cookie from being accessed by client side js, prevents XSS attacks (cross site scripting attacks)
    sameSite: 'strict', //CSRF protection, request forgery attacks
    secure: process.env.NODE_ENV !== 'development', // cookie only sent over HTTPS not HTTP
  });
};
