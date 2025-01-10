const dotenv = require('dotenv');
const path = require('path');

console.log('Current directory:', process.cwd());
console.log('Env file location:', path.join(process.cwd(), '.env'));
const result = dotenv.config();
console.log('Dotenv result:', result);
console.log('Environment variables:', {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT
});