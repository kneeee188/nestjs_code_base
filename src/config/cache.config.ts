import { registerAs } from '@nestjs/config';

export default registerAs('cache', () => ({
  // host: process.env.REDIS_HOST,
  // port: parseInt(process.env.REDIS_PORT, 10) || 6379,
}));
