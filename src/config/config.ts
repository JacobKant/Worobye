require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: null,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_USER_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    ssl: true,
    dialectOptions: {
      ssl: true
    },
    dialect: 'postgres'
  }
};
