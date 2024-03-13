import { NextFunction, Request, Response } from 'express';
import { fetchAlbumPhotos, fetchSinglePhoto, Photo } from '../services/photos.js';
import { getOrSet } from '../services/redis.js';

export const getAllPhotos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { albumId } = req.query;

        const photos = await getOrSet(
            `photos?albumId=${albumId}`,
            () => fetchAlbumPhotos(albumId as string)
        );

        res.status(200).json(photos);
    } catch (error) {
        next(error)
    }
}

export const getSinglePhoto = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const photo = await getOrSet(
            `photos:${id}`,
            () => fetchSinglePhoto(id)
        )

        res.status(200).json(photo);
    } catch (error) {
        next(error)
    }
}