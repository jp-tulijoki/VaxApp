require("dotenv").config();
const { Sequelize } = require("sequelize");

const localDB =
  process.env.ENVIRONMENT === "test"
    ? process.env.TEST_DATABASE
    : process.env.DATABASE;

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      protocol: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : new Sequelize(localDB, process.env.DB_USER, process.env.PASSWORD, {
      host: "localhost",
      dialect: "postgres",
      logging: false,
    });

try {
  sequelize.authenticate();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
