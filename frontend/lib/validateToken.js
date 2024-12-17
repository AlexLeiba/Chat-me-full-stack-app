'use server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export async function validateToken() {
  const cookieStore = cookies();
  const token = cookieStore.get('chat-me-token');
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_FRONTEND);
    const { payload } = await jwtVerify(token, secret);

    return payload; // Decoded token
  } catch (error) {
    return error.message; // Invalid token
  }
}
