/* global require */
/* eslint no-console: "error" */
(function() {
    'use strict';
    var http = require('http');
    var serveStatic = require('serve-static');
    var port = 4200;

    /*
     * https://github.com/expressjs/serve-static#serve-files-with-vanilla-nodejs-http-server
     * Serve up public/ folder
     */
    var servePublic = serveStatic('public', {
        'index': ['index.html', 'index.htm']
    });

    http.createServer(function handler(req, res) {

        console.log(req.method, req.url, 'HTTP' + req.httpVersion, req.headers); // eslint-disable-line
        // no-console

        res.setHeader('Access-Control-Allow-Origin', 'localhost');

        servePublic(req, res, function nextHandler(req, res) {
            console.log(res); // eslint-disable-line
            // no-console
        });
    }).listen(port, 'localhost');
    console.log('Server running at http://localhost:' + port + '/'); // eslint-disable-line
    // no-console

})();