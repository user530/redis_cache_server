import axios, { AxiosResponse } from 'axios';
import { redisClient } from '../models/redis';

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

/**
 * Simple function with a general high response time, to test caching
 * @param albumId Album Id, 
 * @returns Array of photos from the album with param ID
 */
export const fetchAlbumPhotos = async (albumId?: string): Promise<Photo[]> => {
    const res: AxiosResponse<Photo[]> = await axios.get(BASE_URL, { params: { albumId } });
    const client = await redisClient;
    console.log(await client.KEYS('*'))
    return res.data;
};

export const fetchSinglePhoto = async (photoId: string): Promise<Photo> => {
    const res: AxiosResponse<Photo> = await axios.get(`${BASE_URL}/${photoId}`)

    return res.data;
};