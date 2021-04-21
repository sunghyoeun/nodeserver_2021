const myServer = require('./Myserver');
const myRouter = require('./MyRouter');

myServer.start(myRouter.route); 