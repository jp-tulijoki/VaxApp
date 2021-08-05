const DataTypes = require("sequelize");
const sequelize = require(".");

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
    type: DataTypes.DATE,
  },
});

module.exports = Vaccine;
