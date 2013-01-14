#!/usr/bin/env node
var sim = require('./index.js');
if (process.argv.length != 5) {
    console.log('Error: Wrong number of arguments: node start.js <localPort>' +
                ' <remoteHost> <remotePort>');
} else {
    var config = {remoteHost: process.argv[3],
                  remotePort: parseInt(process.argv[4]),
                  localPort: parseInt(process.argv[2])};
    sim.startProxy(config);
}
