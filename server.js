let http = require('http');
let url = require('url');
function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        let content = route(handle, pathname);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}
exports.start = start;