const SequelizeDataTypes = require("sequelize");
const sequelize = require(".");
const withDateNoTz = require("sequelize-date-no-tz-postgres");

const DataTypes = withDateNoTz(SequelizeDataTypes);

const Vaccine = sequelize.define("Vaccine", {
  orderId: {
    type: DataTypes.STRING,
  },
  orderNumber: {
    type: DataTypes.INTEGER,
  },
  responsiblePerson: {
    type: DataTypes.STRING,
  },
  healthCareDistrict: {
    type: DataTypes.STRING,
  },
  vaccine: {
    type: DataTypes.STRING,
  },
  injections: {
    type: DataTypes.INTEGER,
  },
  arrived: {
    type: DataTypes.DATE_NO_TZ,
  },
});

module.exports = Vaccine;
