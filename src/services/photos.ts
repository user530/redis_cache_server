import axios, { AxiosResponse } from 'axios';

export interface Photo {
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

    return res.data;
};

/**
 * Fetch a single photo using direct ID
 * @param photoId Id to specify the photo
 * @returns photo
 */
export const fetchSinglePhoto = async (photoId: string): Promise<Photo> => {
    const res: AxiosResponse<Photo> = await axios.get(`${BASE_URL}/${photoId}`)

    return res.data;
};