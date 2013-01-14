/*!
Copyright 2013 Hewlett-Packard Development Company, L.P.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var http = require('http');
var httpProxy = require('http-proxy');


var cookie = 'sdhdfswey3332';


var patchHeader = function(header) {
    var newCookie = '__VCAP_ID__=' + cookie +
        '; expires=Fri, 18 Sep 2015 13:30:22 GMT; path=/';
    var cookieHeader = header['set-cookie'] || [];
    cookieHeader.push(newCookie);
    header['set-cookie'] = cookieHeader;

};
exports.startProxy = function(config) {

    config = config || {remoteHost: 'localhost', remotePort: 3000,
                        localPort: 4000};

    httpProxy.createServer(function(req, res, proxy) {
                               var _res_writeHead = res.writeHead;
                               res.writeHead = function(name, value) {
                                   patchHeader(value);
                                   console.log('setting header name:' +
                                               name + ' value:' +
                                               JSON.stringify(value));
                                   _res_writeHead.apply(res, [name, value]);
                               };

                               proxy.proxyRequest(req, res, {
                                                      host: config.remoteHost,
                                                      port: config.remotePort
                                                  });
                           }).listen(config.localPort);

};
