import { Request, Response } from 'express';
import { getAllPhotosMsg, getSinglePhotoMsg } from '../services/photos';

export const getAllPhotos = async (req: Request, res: Response) => {
    const msg = await getAllPhotosMsg();
    res.status(200).send(msg);
}

export const getSinglePhoto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const msg = await getSinglePhotoMsg(id);
    res.status(200).send(msg);
}