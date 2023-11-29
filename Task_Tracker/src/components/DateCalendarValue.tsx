import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: '#1E1E1E',
    },
  },
    
});

/*Day.js is a minimalist JavaScript library that parses, validates,
 manipulates, and displays dates and times for modern browsers with a largely 
 Moment.js-compatible API.
*/
export default function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem>
        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoItem>
    </LocalizationProvider>
    </ThemeProvider>
    
  );
}