import React from "react";
import { TextField } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";

const DatePicker = () => {
  return (
    <div>
      <TextField
        label="Date of Travel"
        type="date"
        InputProps={{
          startAdornment: <DateRangeIcon />
        }}
        fullWidth
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        label="Number of Days"
        type="number"
        inputProps={{
          min: 1
        }}
        fullWidth
      />
    </div>
  );
};

export default DatePicker;
