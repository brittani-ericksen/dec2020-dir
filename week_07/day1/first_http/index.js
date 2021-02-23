const HTTP = require("http");

const HOSTNAME = "127.0.0.1";
const PORT = 3333;

const SERVER = HTTP.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
});

SERVER.listen(PORT, HOSTNAME, function() {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
})