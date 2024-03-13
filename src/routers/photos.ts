import { Router } from 'express';
import { getAllPhotos, getSinglePhoto } from '../controllers/photos.js';

export const photosRouter = Router();

photosRouter
    .route('/')
    .get(getAllPhotos);

photosRouter
    .route('/:id')
    .get(getSinglePhoto);