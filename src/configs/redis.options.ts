import { RedisClientOptions } from 'redis';

const protocol = process.env.REDIS_SECURE === 'true' ? 'rediss' : 'redis';
const username = process.env.REDIS_USER;
const password = process.env.REDIS_PASS;
const hostName = process.env.REDIS_HOST;
const hostPort = process.env.REDIS_PORT;
const dbNumber = process.env.REDIS_NUM;

export const redisConfig: RedisClientOptions = {
    url: `${protocol}://${username}:${password}@${hostName}:${hostPort}/${dbNumber}`,
}