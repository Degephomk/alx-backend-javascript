// 4-http.js

const http = require('http');
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
