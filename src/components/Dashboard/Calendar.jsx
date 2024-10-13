import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, InputAdornment, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/en"; // Optional locale import
import advancedFormat from "dayjs/plugin/advancedFormat"; // For ordinal dates (15th, 22nd, etc.)
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; // Calendar Icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Dropdown Icon

dayjs.extend(advancedFormat);

const Calendar = ({ selectedDate, onDateChange }) => {
  const [cleared, setCleared] = useState(false);
  const [value, setValue] = useState(dayjs());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [cleared]);

  const handleIconClick = () => {
    setOpen(true); // Set the DatePicker to open when the icon is clicked
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
    onDateChange(newValue);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "300px",
            background: "white",
            boxShadow: "0px 0px 0px #333333",
          }}
        >
          <DatePicker
            value={value}
            onChange={(newValue) => handleDateChange(newValue)}
            format="dddd, MMM Do YYYY"
            open={open} // Control when the picker is open
            onOpen={() => setOpen(true)} // Open event
            onClose={() => setOpen(false)} // Close event
            slotProps={{
              textField: {
                InputProps: {
                  // Add calendar icon as a clickable input adornment
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handleIconClick}>
                        <CalendarMonthIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  // Add dropdown icon at the end of the input
                  endAdornment: (
                    <InputAdornment position="end" sx={{width:"22rem"}}>
                      <IconButton onClick={handleIconClick}>
                        <ArrowDropDownIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                sx: {
                  border: "none",
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
              },
            }}
          />
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
