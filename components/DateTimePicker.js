import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DateTimePicker } from '@mui/lab';
import TextField from '@mui/material/TextField';
import ClockIcon from '@mui/icons-material/AccessTime';

export default function MyDateTimePicker({ value, setValue }) {
  return (<LocalizationProvider dateAdapter={DateAdapter}>
    <DateTimePicker
      renderInput={(props) => <TextField {...props} />}
      label="Date/Time of ART test"
      inputFormat="DD MMM YYYY hh:mm a"
      openTo="hours"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      components={{
        OpenPickerIcon: ClockIcon,
      }}
    />
  </LocalizationProvider>)

}