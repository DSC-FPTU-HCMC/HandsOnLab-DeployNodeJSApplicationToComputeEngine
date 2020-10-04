const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const message = 'Hello Node!\n';
  console.log(`${req.method} ${req.url}`);
  res.statusCode = 200;
  res.end(message);
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});