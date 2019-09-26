const dotenv = require('dotenv');

const pathEnv = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';

dotenv.config({
  path: pathEnv,
});
