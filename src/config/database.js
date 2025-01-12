const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT || 3306,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  },
  pool: {
    max: 5, // Maximum number of connections
    min: 0, // Minimum number of connections
    acquire: 30000, // Maximum time (ms) to try to get a connection before throwing error
    idle: 10000, // Maximum time (ms) a connection can be idle before being released
  },
  logging: false,
});

module.exports = sequelize;
