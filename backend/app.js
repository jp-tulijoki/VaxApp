const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./models");
const initResorces = require("./resources/initResorces");
const vaccineRouter = require("./controllers/vaccines");

const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/api/vaccines", vaccineRouter);

if (process.env.ENVIRONMENT === "dev") {
  app.listen(PORT, async () => {
    await sequelize.sync({ force: true });
    await initResorces();
    console.log(`Server started in port ${PORT}`);
  });
}

module.exports = app;
