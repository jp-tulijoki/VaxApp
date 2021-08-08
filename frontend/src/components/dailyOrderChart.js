import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DailyOrderChart = ({ stats }) => {
  let data = [];

  for (let i = 0; i < stats.length; i++) {
    data.push({
      name: stats[i].vaccine,
      orders: stats[i].orderCount,
      injections: stats[i].injectionCount,
    });
  }

  return (
    <div>
      <h2>Order stats by producer</h2>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#8884d8" />
        <Bar dataKey="injections" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default DailyOrderChart;
