import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css'
import {useState} from "react";
import {Calendar} from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
// @ts-ignore
export default function DatePickerValue({ onDateChange }) {
    const [date, setDate] = useState<Nullable<Date>>(null);
    const handleDatePickerChange = (date:any) => {
        setDate(date);
        console.log('datos de la fecha ', date)
        onDateChange(date);
    };
    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(newValue) => handleDatePickerChange(newValue.value)}/>
        </div>
    );
}