import { app } from './app/app';
import dotenv from 'dotenv';

// Set up the use of env variables
dotenv.config()

// Port value
const defaultPort = 3000;
const portEnv = process.env.PORT;
const port = portEnv && parseInt(portEnv)
    ? parseInt(portEnv)
    : defaultPort;

// Activate app 
app.listen(port, () => console.log('Express server is up and running at port %d', port));