const vaccineRouter = require("express").Router();
const { Op, Sequelize } = require("sequelize");
const Vaccine = require("../models/vaccine");
const Vaccination = require("../models/vaccination");

vaccineRouter.post("/", async (req, res) => {
  const time = req.body.time;
  const beginning = `${time.substring(0, 11)}00:00:00`;
  const end = `${time.substring(0, 11)}23:59:59`;

  const dailyCount = await Vaccine.findAll({
    attributes: [
      "vaccine",
      [Sequelize.fn("COUNT", Sequelize.col("vaccine")), "orderCount"],
      [Sequelize.fn("SUM", Sequelize.col("injections")), "injectionCount"],
    ],
    where: {
      arrived: {
        [Op.gte]: beginning,
        [Op.lte]: end,
      },
    },
    group: "vaccine",
    raw: true,
    nest: true,
  });

  const timeMinus30days = new Date(new Date(time) - 2581200000);

  const expiredBottles = await Vaccine.findAll({
    attributes: ["orderId"],
    where: {
      arrived: { [Op.lte]: timeMinus30days },
    },
    raw: true,
  });

  const expiredBottlesCount = expiredBottles.length;

  const expiredBottlesInPlain = expiredBottles.map((o) => o.orderId);

  const vaccinesInExpiredBottles = await Vaccine.sum("injections", {
    where: { arrived: { [Op.lte]: timeMinus30days } },
    raw: true,
  });

  const vaccinationsBeforeExpiration = await Vaccination.count({
    where: {
      sourceBottle: {
        [Op.in]: expiredBottlesInPlain,
      },
    },
  });

  const validBottles = await Vaccine.findAll({
    attributes: ["orderId"],
    where: {
      arrived: { [Op.gt]: timeMinus30days, [Op.lte]: time },
    },
    raw: true,
  });

  const validBottlesInPlain = validBottles.map((o) => o.orderId);

  const vaccinesInValidBottles = await Vaccine.sum("injections", {
    where: { arrived: { [Op.gt]: timeMinus30days, [Op.lte]: time } },
    raw: true,
  });

  const vaccinationsDoneWithValidBottles = await Vaccination.count({
    where: {
      sourceBottle: {
        [Op.in]: validBottlesInPlain,
      },
      vaccinationDate: {
        [Op.lte]: time,
      },
    },
  });

  const vaccinesLeftToUse = isNaN(vaccinesInValidBottles)
    ? 0
    : Number(vaccinesInValidBottles) - Number(vaccinationsDoneWithValidBottles);

  const timeMinus20days = new Date(new Date(time) - 1717200000);

  const expiringBottles = await Vaccine.findAll({
    attributes: ["orderId"],
    where: {
      arrived: { [Op.gt]: timeMinus30days, [Op.lte]: timeMinus20days },
    },
    raw: true,
  });

  const expiringBottlesInPlain = expiringBottles.map((o) => o.orderId);

  const vaccinesInExpiringBottles = await Vaccine.sum("injections", {
    where: { arrived: { [Op.gt]: timeMinus30days, [Op.lte]: timeMinus20days } },
    raw: true,
  });

  const vaccinationsDoneWithExpiringBottles = await Vaccination.count({
    where: {
      sourceBottle: {
        [Op.in]: expiringBottlesInPlain,
      },
      vaccinationDate: {
        [Op.lte]: time,
      },
    },
  });

  const expiringVaccines = isNaN(vaccinesInExpiringBottles)
    ? 0
    : Number(vaccinesInExpiringBottles) -
      Number(vaccinationsDoneWithExpiringBottles);

  return res.status(200).json({
    dailyCount,
    expiredBottlesCount,
    vaccinesInExpiredBottles,
    vaccinationsBeforeExpiration,
    vaccinesLeftToUse,
    expiringVaccines,
  });
});

module.exports = vaccineRouter;
