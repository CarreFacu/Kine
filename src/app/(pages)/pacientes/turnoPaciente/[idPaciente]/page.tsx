'use client'
import {Typography} from "@mui/material";
import EditorTexto from '@/src/app/components/EditorTexto'
import React, { useState} from "react";
import Title from "@/src/app/components/Title";
import ModalHistoriaClinica from "@/src/app/components/ModalHistoriaClinica";
import {FiltrosHistoriaClinica,HistoriaClinica} from "@/src/app/utils/interfaces";
import {hitoriaClinica} from "@/src/app/utils/DB";
import {tipoHistoriaClinica} from "@/src/app/utils/mappingFunctions";
import DatePicker from "@/src/app/components/DayPickerRangeValue";

export default function TunoPaciente({params} : {params: {idPaciente: string}}){
    const { idPaciente } = params;
    console.log('datos del paciente', idPaciente)
    const [filters, setFilters] = useState<FiltrosHistoriaClinica>(
        {
            tipoHistoria: '',
            fechaDesde: '',
            fechaHasta: ''
        }
    )
    const handleSearch = (name:string, value:string) => {
        setFilters({...filters, [name]: value } );
    };
    console.log(filters)
    return(
        <main>
            <div className="mb-10">
                <Title title="Nuevo registro de historia clinica del paciente: Cosme fulanito"/>
            </div>

            <div>
                <EditorTexto/>
            </div>

            <div className="mb-10 mt-10">
                <Title title="Historia clinica del paciente: Cosme fulanito"/>
            </div>
            <div className='flex justify-between align-middle'>
                <div className="relative w-56">
                    <label
                        htmlFor="fecha de nacimiento"
                        className="mb-2 block text-sm font-medium"
                    >
                        Tipo de Historia Clinica
                    </label>
                    <select
                        id="tipoHistoria"
                        name="tipoHistoria"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue=""
                        onChange={(e) =>
                            handleSearch('tipoHistoria', e.target.value)
                        }
                    >
                        <option value="" disabled>
                            Selecciona una opción
                        </option>
                        {tipoHistoriaClinica.map(({id, text}) => (
                            <option key={id} value={id}>
                                {text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="fecha de nacimiento"
                        className="mb-2 block text-sm font-medium"
                    >
                        Rango de Fecha
                    </label>
                    <DatePicker/>
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-5">

                {hitoriaClinica.map((historiaClinica: HistoriaClinica, index: number) => (
                    <ModalHistoriaClinica historiaClinica={historiaClinica} key={index}/>
                ))}

            </div>
        </main>


    )
}