import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css'
import {Dayjs} from "dayjs";

// @ts-ignore
export default function RangeDemo({ onDateChange }) {
    const [dates, setDates] = useState<Nullable<(Date | null)[]>>(null);
    const handleDatePickerChange = (date:any) => {
        setDates(date);
        console.log('datos de la fecha ', date)
        onDateChange(dates);
    };
    console.log(dates)
    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => handleDatePickerChange(e.value)} selectionMode="range" hideOnRangeSelection dateFormat="dd/mm/yy" />
        </div>

    )
}
