'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 1729
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (req, res) {
        return res('hello world');
    }
});

server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at :', server.info.uri);
})
