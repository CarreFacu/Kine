import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {useState} from "react";
// @ts-ignore
export default function DatePickerValue({ onDateChange }) {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));
    const handleDatePickerChange = (date: Dayjs | null) => {
        setValue(date);
        onDateChange(date);
    };
    const newTheme = (theme:any) => createTheme({
        ...theme,
        components: {
            MuiPickersDay: {
                styleOverrides: {
                    root: {
                        color: '#fdfdfd',
                        borderRadius: '20px',
                        borderWidth: '0px',
                        borderColor: '#3f252b',
                        border: '0px solid',
                        backgroundColor: '#4C635A',
                    }
                }
            },
        }
    })
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <ThemeProvider theme={newTheme}>
                <DatePicker
                    label="Controlled picker"
                    value={value}
                    onChange={(newValue) => handleDatePickerChange(newValue)}
                />
                </ThemeProvider>
            </DemoContainer>
        </LocalizationProvider>
    );
}