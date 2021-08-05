const express = require("express");
const app = express();
const sequelize = require("./models");
const initResorces = require("./resources/initResorces");

const PORT = 5000;

app.listen(PORT, async () => {
  await sequelize.sync({ force: true });
  await initResorces();
  console.log(`Server started in port ${PORT}`);
});
