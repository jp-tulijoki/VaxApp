const vaccineRouter = require("express").Router();
const { Op, Sequelize } = require("sequelize");
const Vaccine = require("../models/vaccine");
const Vaccination = require("../models/vaccination");

vaccineRouter.post("/", async (req, res) => {
  const beginning = `${req.body.time}T00:00:00`;
  const end = `${req.body.time}T23:59:59`;

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
  return res.status(200).json({ dailyCount });
});

module.exports = vaccineRouter;
