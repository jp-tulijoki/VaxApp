const SequelizeDataTypes = require("sequelize");
const sequelize = require(".");
const withDateNoTz = require("sequelize-date-no-tz-postgres");

const DataTypes = withDateNoTz(SequelizeDataTypes);

const Vaccination = sequelize.define("Vaccination", {
  vaccinationId: {
    type: DataTypes.STRING,
  },
  sourceBottle: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  vaccinationDate: {
    type: DataTypes.DATE_NO_TZ,
  },
});

module.exports = Vaccination;
