// Loads environment variables from a .env file at the project root (if present).
const dotenv = require('dotenv');
const path = require('path');

const envFile = path.resolve(process.cwd(), '.env');
const result = dotenv.config({ path: envFile });

if (result.error && process.env.NODE_ENV !== 'production') {
  console.warn(`dotenv: no .env file at ${envFile}; using environment variables only.`);
}
