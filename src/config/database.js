
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:dzQuYjutfAyrsneHnafPIJFwuSLefaEy@junction.proxy.rlwy.net:42514/railway', {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  },
  logging: false, // Disable logging if not needed
  define: {
    // Add these global model options
    timestamps: true, // Adds createdAt and updatedAt timestamps
    underscored: true, // Uses snake_case rather than camelCase for fields
    freezeTableName: false, // Sequelize will pluralize table names
  },
});

module.exports = sequelize;

