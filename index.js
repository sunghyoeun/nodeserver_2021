const myServer = require('./Myserver');
const myRouter = require('./MyRouter');
const myHandler = require('./MyHandler');

let handle = {};
handle['/'] = myHandler.start;
handle['/hello'] = myHandler.hello;
handle['/wait'] = myHandler.wait;
handle['/randomWait'] = myHandler.randomWait;

myServer.start(myRouter.route, handle); 