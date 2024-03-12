import express, { Express } from 'express';
import { photosRouter } from '../routers/photos';
import { errorLogger } from '../middleware/error-logger';

// App instance
export const app: Express = express();

// Use middleware
app.use(errorLogger);

// Set up router
app.use('/photos', photosRouter);