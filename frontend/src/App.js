import { useState } from "react";
import MaterialUIPickers from "./components/timepicker";
import DailyStats from "./components/dailyStats";
import axios from "axios";

const App = () => {
  const [stats, setStats] = useState({ dailyCount: [] });

  const getStats = async (time) => {
    const response = await axios.post("http://localhost:5000/api/vaccines", {
      time,
    });
    setStats(response.data.dailyCount);
  };

  return (
    <div>
      <h1>Welcome to Vax App!</h1>
      <p>Please select date and time to see statistics.</p>
      <MaterialUIPickers getStats={getStats} />
      <DailyStats stats={stats} />
    </div>
  );
};

export default App;
