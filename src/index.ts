import * as http from 'http';
import app from './app';
import {normalizePort, onError, onListening} from './utils/utils';

const server = http.createServer(app);
const port = normalizePort(process.env.PORT || 3000);
//const { port } = server.address() as AddressInfo;

server.listen(port);
server.on('error', onError(server));
server.on('listening', onListening(server));