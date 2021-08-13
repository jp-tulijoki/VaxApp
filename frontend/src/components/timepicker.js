import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const MaterialUIPickers = ({ getStats }) => {
  const date = "2021-04-13T12:00:00";

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    const time = selectedDate.toTimeString().substring(0, 8);
    const ISODate = selectedDate.toISOString().substring(0, 11);
    const dateTime = `${ISODate}${time}`;
    getStats(dateTime);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          views={["year", "month", "date"]}
          margin="normal"
          id="date-picker-inline"
          label="Select date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Select time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default MaterialUIPickers;
