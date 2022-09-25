var expect  = require('chai').expect;
var request = require('request');
var app = require('../helloworld');
var http = require('http');

describe('Connect to main page', function(){
    before(function(){
        this.server = http.createServer(app).listen(3000);
    });

    before(function(done){
        done();
    });

    it('Main page content', function(done) {
        request('http://localhost:3000' , function(error, response, body) {
            expect(body).to.equal('Hello World!');
            done();
        });
    });

    after(function(){
        this.server.close();
    });
});

