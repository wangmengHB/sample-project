let express = require('express');
let app = express();
let http = require('http');
let path = require('path');


let currentDir = process.cwd();
app.use(express.static(currentDir));
require('./router.js')(app);
let server = http.createServer(app);
server.listen(3000);

console.log('http://localhost:3000');