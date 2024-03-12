import { Router } from 'express';
import { getAllPhotos, getSinglePhoto } from '../controllers/photos';

export const photosRouter = Router();

photosRouter
    .route('/')
    .get(getAllPhotos);

photosRouter
    .route('/:id')
    .get(getSinglePhoto);