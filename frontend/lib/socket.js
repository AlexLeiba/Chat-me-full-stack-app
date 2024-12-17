import { io } from 'socket.io-client';

const BACKEND_BASE_URL = 'http://localhost:5001/';
const socket = io(BACKEND_BASE_URL);

export default socket;
