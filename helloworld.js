var http = require('http');

var app = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
};

module.exports = app;

if(!module.parent){
    http.createServer(app).listen(3000,  function() {
        console.log('HelloWorld server running on port ' + http.port);
    });
}
