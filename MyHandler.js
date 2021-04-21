function start(res){
    let body = 'Hello, world! <br> I am in the cloud class.'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(body);
    res.end();
}

function hello(res){
    let body = 'This is my First Web Server'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(body);
    res.end();

}
exports.start = start;
exports.hello = hello; 