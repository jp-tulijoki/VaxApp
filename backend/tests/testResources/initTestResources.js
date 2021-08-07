const fs = require("fs");
const Vaccine = require("../../models/vaccine");
const sequelize = require("../../models");

const vaccinePath = `${__dirname}/testVaccines.source`;

const initTestResorces = async () => {
  await sequelize.sync({ force: true });

  const vaccines = fs.readFileSync(vaccinePath).toString().split("\n");

  vaccines.forEach(async (v) => {
    try {
      const vaccine = JSON.parse(v);
      await Vaccine.create({
        orderId: vaccine.id,
        healthCareDistrict: vaccine.healthCareDistrict,
        orderNumber: vaccine.orderNumber,
        responsiblePerson: vaccine.responsiblePerson,
        injections: vaccine.injections,
        arrived: vaccine.arrived,
        vaccine: vaccine.vaccine,
      });
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = initTestResorces;
