import dotenv from 'dotenv';
import { dotenvConfig } from '../configs/dotenv.options';

// Load variables from the file into the environment
export default dotenv.config(dotenvConfig);