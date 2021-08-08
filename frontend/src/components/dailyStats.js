import DailyOrderChart from "./dailyOrderChart";

const DailyStats = ({ stats }) => {
  let orderCount = 0;
  let injectionCount = 0;

  for (let i = 0; i < stats.length; i++) {
    orderCount += Number(stats[i].orderCount);
    injectionCount += Number(stats[i].injectionCount);
  }

  return (
    <div>
      <p>
        On the selected day arrived {orderCount} orders and {injectionCount}{" "}
        injections.
      </p>
      {stats.length > 0 ? <DailyOrderChart stats={stats} /> : <div></div>}
    </div>
  );
};

export default DailyStats;
