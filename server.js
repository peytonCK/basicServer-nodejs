const Port = 4080;

let server = require('./basicserver').createServer();
server.useFavIcon("localhost", "./docroot/favicon.ico");
server.docroot("localhost", '/', "./docroot");
require('./httpsniffer').sniffOn(server);
server.listen(Port);