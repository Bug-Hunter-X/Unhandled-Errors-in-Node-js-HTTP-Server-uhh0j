const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Your request handling logic here
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

server.on('error', err => {
  console.error('Server error:', err);
});