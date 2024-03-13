import './app/env.js';
import { app } from './app/app.js';

// Port value
const defaultPort = 3000;
const portEnv = process.env.PORT;
const port = portEnv && parseInt(portEnv)
    ? parseInt(portEnv)
    : defaultPort;

// Activate app 
app.listen(port, () => console.log('Express server is up and running at port %d', port));