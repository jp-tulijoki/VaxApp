const fs = require("fs");
const Vaccine = require("../../models/vaccine");
const sequelize = require("../../models");
const Vaccination = require("../../models/vaccination");

const vaccinePath = `${__dirname}/testVaccines.source`;
const vaccinationsPath = `${__dirname}/testVaccinations.source`;

const initTestResorces = async () => {
  await sequelize.sync({ force: true });

  const vaccines = fs.readFileSync(vaccinePath).toString().split("\n");
  const vaccinations = fs.readFileSync(vaccinationsPath).toString().split("\n");

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

  vaccinations.forEach(async (v) => {
    try {
      const vaccination = JSON.parse(v);
      await Vaccination.create({
        vaccinationId: vaccination["vaccination-id"],
        sourceBottle: vaccination.sourceBottle,
        gender: vaccination.gender,
        vaccinationDate: vaccination.vaccinationDate,
      });
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = initTestResorces;
