require("dotenv").config();
const { Sequelize } = require("sequelize");

const db =
  process.env.ENVIRONMENT === "test"
    ? process.env.TEST_DATABASE
    : process.env.DATABASE;

const sequelize = new Sequelize(db, process.env.DB_USER, process.env.PASSWORD, {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
