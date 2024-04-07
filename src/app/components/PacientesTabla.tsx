import { pacientes } from "@/src/app/utils/DB";
import { Pacientes } from "@/src/app/utils/interfaces";
import Pagination from "@/src/app/components/Pagination";
import {
    TrashIcon,
    PencilSquareIcon,
} from '@heroicons/react/24/outline';

export default function PacientesTabla({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    function normalizeString(str: string) {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }

    function pacientesFiltrados(pacientes: Pacientes[], query: string) {
        const normalizedQuery = normalizeString(query);
        if (!query) {
            return pacientes;
        }
        return pacientes.filter((paciente: Pacientes) => {
            return (
                paciente.nombre.includes(normalizedQuery) ||
                paciente.apellido.includes(normalizedQuery) ||
                paciente.email.includes(normalizedQuery)
            );
        });
    }

    const ITEMS_PER_PAGE = 10;
    const filteredPacientes = pacientesFiltrados(pacientes, query);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pacientesToShow = filteredPacientes.slice(startIndex, endIndex);
    // Pagination
    const totalPeriods = query ? filteredPacientes : pacientes;
    const totalPages = Math.ceil(totalPeriods.length / ITEMS_PER_PAGE);
    return (
        <div>
            <div className="container mx-auto px-4 ">
                <table className="min-w-full text-left text-sm text-gray-500 rounded-3xl">
                    <thead className="border-2 border-b-greenCustom-400 bg-gray-50 text-xs text-gray-700">
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase text-greenCustom-800">Nombre</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase text-greenCustom-800">Apellido</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase text-greenCustom-800">Fecha
                                de Nacimiento
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase  text-greenCustom-800">Email</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase text-greenCustom-800">Género</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase text-greenCustom-800">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientesToShow.map((paciente: Pacientes, index: number) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{paciente.nombre}</td>
                                <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{paciente.apellido}</td>
                                <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{paciente.fechaNacimiento}</td>
                                <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{paciente.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{paciente.genero}</td>
                                <td className="px-6 py-4 whitespace-nowrap bg-gray-100 flex gap-3">
                                    <div><PencilSquareIcon className="h-5 w-5 cursor-pointer text-greenCustom-600" /></div>
                                    <div> <TrashIcon className="h-5 w-5 cursor-pointer text-red-500" /></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>

    );
};