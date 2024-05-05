import { tunosProfecional } from "@/src/app/utils/DB";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {useState} from "react";

export function FormTurnos() {
    // Configura el localizador de fechas de moment.js
    const localizer = momentLocalizer(moment);
    const [currentDate, setCurrentDate] = useState(new Date());
    // Genera los eventos del calendario basados en los datos de disponibilidad de los profesionales
    let eventosDisponibilidad = tunosProfecional.map((disponible) => ({
        title: 'Disponible',
        start: new Date(disponible.fechaDesde),
        end: new Date(disponible.fechaHasta), // Puedes ajustar la duración del evento si es necesario
    }));
    const handleNavigate = (view, date) => {
        // Maneja el cambio de vista y la fecha seleccionada
        console.log('Vista cambiada:', view);
        console.log('Fecha seleccionada:', date);
        setCurrentDate(date);
    };

    return (
        <div>
            <Calendar
                localizer={localizer}
                date={currentDate} // Establece la fecha actual del calendario
                events={eventosDisponibilidad} // Pasa los eventos al calendario
                onNavigate={handleNavigate} // Manejo del cambio de vista
                style={{ height: 500 }}
            />
        </div>
    );
}