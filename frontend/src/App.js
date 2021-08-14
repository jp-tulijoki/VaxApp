import { useState } from "react";
import MaterialUIPickers from "./components/timepicker";
import DailyStats from "./components/dailyStats";
import axios from "axios";

const App = () => {
  const [stats, setStats] = useState(null);

  const getStats = async (time) => {
    try {
      const response = await axios.post("/api/vaccines", {
        time,
      });
      setStats(response.data);
    } catch (error) {
      setStats("unavailable");
    }
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
