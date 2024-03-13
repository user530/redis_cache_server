import { Request, Response } from 'express';
import { fetchAlbumPhotos, fetchSinglePhoto } from '../services/photos.js';

export const getAllPhotos = async (req: Request, res: Response) => {
    const { albumId } = req.query;

    const photos = await fetchAlbumPhotos(albumId as string);

    res.status(200).json(photos);
}

export const getSinglePhoto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const photo = await fetchSinglePhoto(id);

    res.status(200).json(photo);
}