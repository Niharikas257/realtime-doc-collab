require('dotenv').config();
const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

// Log Socket.IO connections (for now)
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
