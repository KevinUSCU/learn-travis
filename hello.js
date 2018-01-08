// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello Travis!\n'); // test is linting; without ; on this line it will fail
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');

class main {

  static add(x, y) {
    return x + y
  }

}

module.exports = main