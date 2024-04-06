import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useMapContext } from "#contexts/MapContext";

export default function MonthDropdown() {
  const currentMonth = new Date().getMonth();
  const defaultValue = currentMonth * 10;
  const [value, setValue] = React.useState(defaultValue);
  const { dispatch } = useMapContext();

  const handleChange = (event) => {
    setValue(event.target.value);
    const selectedMonth = event.target.value / 10;
    dispatch({
      type: "SET_LOCATION",
      payload: { month: selectedMonth },
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="month-dropdown-label">Month</InputLabel>
        <Select
          labelId="month-dropdown-label"
          id="month-dropdown"
          value={value}
          label="Month"
          onChange={handleChange}
        >
          <MenuItem value={0}>January</MenuItem>
          <MenuItem value={10}>February</MenuItem>
          <MenuItem value={20}>March</MenuItem>
          <MenuItem value={30}>April</MenuItem>
          <MenuItem value={40}>May</MenuItem>
          <MenuItem value={50}>June</MenuItem>
          <MenuItem value={60}>July</MenuItem>
          <MenuItem value={70}>August</MenuItem>
          <MenuItem value={80}>September</MenuItem>
          <MenuItem value={90}>October</MenuItem>
          <MenuItem value={110}>November</MenuItem>
          <MenuItem value={120}>December</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
