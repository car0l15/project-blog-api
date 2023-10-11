require('dotenv').config();


const options = 
{
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    database:
    `${process.env.DB_NAME }`,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    dialectOptions: {
    timezone: 'Z',
    },
    logging: process.env.DEBUG
};

  module.exports = {
    development: {
      ...options,
    },
    test: {
      ...options,
    },
  };
