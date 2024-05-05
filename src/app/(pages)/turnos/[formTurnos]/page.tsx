"use client"
import React, {useState} from "react";
import {FormTurnos} from "@/src/app/components/FormTurnos";
import {generos} from "@/src/app/utils/mappingFunctions";
import DatePicker from "@/src/app/components/DatePickerValue";
import Link from "next/link";
import {Button} from "@/src/app/components/Button";
export default function FromTurnosPage ()  {
    const [filter, setFilter] = useState('');
    const handleDateChange = (value:string) => {
        console.log('que viene aca ', value)
        setFilter(value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(filter);
    };

    return (
            <main>
                <form onSubmit={handleSubmit} className="px-5 py-3 w-[100%] flex flex-col ">
                    <div className="rounded-md bg-gray-50 p-4 md:p-6  flex-1">
                        <div className="mb-6">
                            <label
                                htmlFor="genero"
                                className="mb-2 block text-sm font-medium"
                            >
                                Genero
                            </label>
                            <div className="relative">
                                <select
                                    id="genero"
                                    name="genero"
                                    required
                                    className="peer block w-full cursor-pointer rounded-md border border-gray-200 bg-transparent py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue=""
                                    onChange={(e) =>
                                        handleDateChange(e.target.value)
                                    }
                                >
                                    <option value="" disabled>
                                        Selecciona una opción
                                    </option>
                                    {generos.map(({ id, text }) => (
                                        <option key={id} value={id}>
                                            {text}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className="flex justify-end gap-3">
                            <Button type="submit">Buscar</Button>
                        </div>
                    </div>

                </form>
                <FormTurnos/>
            </main>
        )
};