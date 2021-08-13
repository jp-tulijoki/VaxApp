import React from "react";
import { PieChart, Pie, Legend } from "recharts";

const VaccineUseStats = ({ stats }) => {
  const vaccinationsBeforeExpiration = stats.vaccinationsBeforeExpiration;
  const spoiledVaccines =
    stats.vaccinesInExpiredBottles - stats.vaccinationsBeforeExpiration;

  const data = [
    {
      name: "Vaccinations before expiration",
      value: vaccinationsBeforeExpiration,
      fill: "#0ee327",
    },
    { name: "Spoiled vaccines", value: spoiledVaccines, fill: "#e30e0e" },
  ];

  return (
    <div>
      <h2>Vaccine use efficiency</h2>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill={data.fill}
          label
        />
        <Legend />
      </PieChart>
    </div>
  );
};

export default VaccineUseStats;
