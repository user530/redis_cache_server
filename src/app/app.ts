import express, { Express } from 'express';
import { photosRouter } from '../routers/photos.js';
import { errorLogger } from '../middlewares/error-logger.js';
import 'express-async-errors';
import cors from 'cors';

// App instance
export const app: Express = express();

// Use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up router
app.use('/photos', photosRouter);

// Error handler middleware
app.use(errorLogger);