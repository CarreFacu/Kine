'use client'
import { useState, useEffect } from 'react';
import { handleFormPaciente } from '@/src/app/utils/interfaces';
import { generos } from '@/src/app/utils/mappingFunctions';
import { Button } from '@/src/app/components/Button';
import DatePicker from "@/src/app/components/DatePickerValue";
import Link from "next/link";
export function PacienteForm({
    onSubmit,
    pacienteData,
}: handleFormPaciente) {
    const [paciente, setPaciente] = useState(pacienteData || {
        nombre: '',
        apellido: '',
        email: '',
        genero: '',
        fechaNacimiento: '',
    });
    const [isEditing, setIsEditing] = useState(!!pacienteData);

    useEffect(() => {
        setIsEditing(!!pacienteData);
    }, [pacienteData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaciente({ ...paciente, [name]: value });
    };
    const handleDateChange = (name:string, value:string) => {
        setPaciente({ ...paciente, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(paciente);
    };

    return (
        <form onSubmit={handleSubmit} className="px-5 py-3 w-[100%] flex flex-col ">
            <div className="rounded-md bg-gray-50 p-4 md:p-6  flex-1">
                <div className="mb-6">
                    <label
                        htmlFor="opportunity"
                        className="mb-2 block text-sm font-medium"
                    >
                        Nombre
                    </label>
                    <div className="relative">
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            value={paciente.nombre}
                            onChange={handleChange}
                            className="peer block w-full rounded-lg border-2 border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="apellido"
                        className="mb-2 block text-sm font-medium"
                    >
                        Apellido
                    </label>
                    <div className="relative">
                        <input
                            id="apellido"
                            name="apellido"
                            type="text"
                            required
                            value={paciente.apellido}
                            onChange={handleChange}
                            className="peer block w-full rounded-lg border-2 border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>
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
                                handleDateChange('genero', e.target.value)
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
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={paciente.email}
                            onChange={handleChange}
                            className="peer block w-full rounded-lg border-2 border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="fecha de nacimiento"
                        className="mb-2 block text-sm font-medium"
                    >
                        Fecha de Nacimiento
                    </label>
                    <div className="relative">
                        <DatePicker onDateChange={(value:any) => handleDateChange('fechaNacimiento',value)}/>
                    </div>
                </div>
                <div className="flex justify-end gap-3">
                    <Link href="/pacientes" className="flex h-10 items-center">
                        <Button className="border-2 border-gray-200 bg-transparent text-zinc-800 transition-colors hover:bg-zinc-400 hover:text-white">
                            Cancelar
                        </Button>
                    </Link>
                    <Button type="submit">{isEditing ? 'Actualizar' : 'Crear'}</Button>
                </div>
            </div>

        </form>
    );
}
