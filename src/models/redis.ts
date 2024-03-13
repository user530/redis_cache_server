import { createClient } from 'redis';
import { redisConfig } from '../configs/redis.options.js';

export const redisClient = await createClient(redisConfig)
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()