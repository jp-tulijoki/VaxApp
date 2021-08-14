import DailyOrderChart from "./dailyOrderChart";
import VaccineUseStats from "./vaccineUseStats";

const DailyStats = ({ stats }) => {
  if (stats === null) {
    return <></>;
  }

  if (stats === "unavailable") {
    return <div>Unable to fetch stats from the database at the moment.</div>;
  }

  let orderCount = 0;
  let injectionCount = 0;

  for (let i = 0; i < stats.dailyCount.length; i++) {
    orderCount += Number(stats.dailyCount[i].orderCount);
    injectionCount += Number(stats.dailyCount[i].injectionCount);
  }

  return (
    <div>
      <p>
        On the selected day arrived <b>{orderCount}</b> orders and{" "}
        <b>{injectionCount}</b> injections.
      </p>
      {stats.dailyCount.length > 0 ? <DailyOrderChart stats={stats} /> : <></>}
      <p>
        By the given time, <b>{stats.expiredBottlesCount}</b> vaccine bottles
        have been expired.
      </p>
      <VaccineUseStats stats={stats} />
      <p>
        At the moment, there are <b>{stats.vaccinesLeftToUse}</b> vaccines
        available to be used. <b>{stats.expiringVaccines}</b> of them will
        expire in 10 days.
      </p>
    </div>
  );
};

export default DailyStats;
