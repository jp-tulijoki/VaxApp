require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

try {
  sequelize.authenticate();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
