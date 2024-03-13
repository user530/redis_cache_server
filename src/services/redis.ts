import { redisClient } from '../models/redis.js';

const DEFAULT_EXPIRATION = 3600;

/**
 * Try to get the data from the cache, if nothing found, fetch using callback and store it for future use
 * @param key key for the redis cache (route with params)
 * @param cb callback to get data on cache miss
 * @param expirationTime expiration time for the cache in seconds (Default is 1h) 
 * @returns Data of the type specified before
 */
export const getOrSet = async <T>(key: string, cb: () => Promise<T>, expirationTime?: number): Promise<T> => {
    // Check the DB
    const cachedData: string | null = await redisClient.get(key);

    // Return parsed cache if cache hit
    if (cachedData)
        return JSON.parse(cachedData);

    // Cache miss -> get data from CB
    const nonCachedData: T = await cb();

    // Cache fresh result
    redisClient.setEx(key,
        expirationTime || DEFAULT_EXPIRATION,
        JSON.stringify(nonCachedData),
    )

    return nonCachedData;
}