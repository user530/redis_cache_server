export const getAllPhotosMsg = async (): Promise<string> => 'Get all photos route fired!';

export const getSinglePhotoMsg = async (photoId: string): Promise<string> => {
    if (Number.isNaN(parseInt(photoId)))
        throw new Error('photoId must be a number!');

    return `Get single photo route fired! Id - ${parseInt(photoId)}`
};