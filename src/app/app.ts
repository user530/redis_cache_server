import express, { Express } from 'express';
import { photosRouter } from '../routers/photos';
import { errorLogger } from '../middlewares/error-logger';
import 'express-async-errors';
const cors = require('cors');

// App instance
export const app: Express = express();

// Use middleware
app.use(errorLogger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up router
app.use('/photos', photosRouter);