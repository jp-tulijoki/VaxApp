const fs = require("fs");
const Vaccination = require("../models/vaccination");
const Vaccine = require("../models/vaccine");

const vaccinationsPath = `${__dirname}/vaccinations.source`;
const vaccinePaths = [
  `${__dirname}/Antiqua.source`,
  `${__dirname}/SolarBuddhica.source`,
  `${__dirname}/Zerpfy.source`,
];

const initResorces = () => {
  const vaccinations = fs.readFileSync(vaccinationsPath).toString().split("\n");

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

  vaccinePaths.forEach((vaccineType) => {
    const vaccines = fs.readFileSync(vaccineType).toString().split("\n");

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
  });
};

module.exports = initResorces;
