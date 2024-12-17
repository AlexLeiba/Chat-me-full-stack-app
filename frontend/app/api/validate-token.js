import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { token } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ valid: true, user: decoded });
    return decoded;
  } catch (error) {
    console.error(error);
    res.status(401).json({ valid: false, error: 'Invalid token' });
  }
}
