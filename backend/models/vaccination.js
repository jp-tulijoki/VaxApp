const DataTypes = require("sequelize");
const sequelize = require(".");

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
    type: DataTypes.DATE,
  },
});

module.exports = Vaccination;
