import { createClient } from 'redis';
import { redisConfig } from '../configs/redis.options';

export const redisClient = createClient(redisConfig)
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()