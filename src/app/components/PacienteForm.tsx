'use client'
import { useState, useEffect } from 'react';
import { handleFormPaciente } from '@/src/app/utils/interfaces';
import { generos } from '@/src/app/utils/mappingFunctions';
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
        //setPaciente(pacienteData || { name: '', email: '' });
        setIsEditing(!!pacienteData);
    }, [pacienteData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaciente({ ...paciente, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(paciente);
    };

    return (
        <form onSubmit={handleSubmit} className="px-5 py-3 w-[100%]">
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-6">
                    <label
                        htmlFor="opportunity"
                        className="mb-2 block text-sm font-medium"
                    >
                        Nombre del paciente
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
                        htmlFor="opportunity"
                        className="mb-2 block text-sm font-medium"
                    >
                        Apellido del paciente
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
                        htmlFor="opportunity"
                        className="mb-2 block text-sm font-medium"
                    >
                        Email del paciente
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
                        htmlFor="genero"
                        className="mb-2 block text-sm font-medium"
                    >
                        Genero del paciente
                    </label>
                    <div className="relative">
                        <select
                            id="genero"
                            name="genero"
                            required
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 bg-transparent py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue=""
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
                <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
            </div>

        </form>
    );
};
