import { turnos } from "@/src/app/utils/DB";
import { Turnos } from "@/src/app/utils/interfaces";
import Pagination from "@/src/app/components/Pagination";
import {
    CheckBadgeIcon,
    XMarkIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';
import Link from "next/link";

export default function TurnoDashboardTable({
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

    function turnosFiltrados(turnos: Turnos[], query: string) {
        const normalizedQuery = normalizeString(query);
        if (!query) {
            return turnos;
        }
        return turnos.filter((turnos: Turnos) => {
            return (
                turnos.nombre.includes(normalizedQuery) ||
                turnos.apellido.includes(normalizedQuery) ||
                turnos.email.includes(normalizedQuery)
            );
        });
    }

    const ITEMS_PER_PAGE = 10;
    const filteredPacientes = turnosFiltrados(turnos, query);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const turnosToShow = filteredPacientes.slice(startIndex, endIndex);
    // Pagination
    const totalPeriods = query ? filteredPacientes : turnos;
    const totalPages = Math.ceil(totalPeriods.length / ITEMS_PER_PAGE);
    return (
        <div>
            <div className="container mx-auto px-4 ">
                <table className="min-w-full text-left text-sm text-gray-500 rounded-3xl">
                    <thead className="border-2 border-b-greenCustom-400 bg-gray-50 text-xs text-gray-700">
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase text-greenCustom-800">Nombre</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase text-greenCustom-800">Apellido</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase  text-greenCustom-800">Email</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase  text-greenCustom-800">Email</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase  text-greenCustom-800">Celular</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase  text-greenCustom-800">Hora de atencion</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase text-greenCustom-800">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {turnosToShow.map((turnos: Turnos, index: number) => (
                        <tr key={index} className="h-3">
                            <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{turnos.nombre}</td>
                            <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{turnos.apellido}</td>
                            <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{turnos.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{turnos.tipoTurno}</td>
                            <td className="px-6 py-4 whitespace-nowrap bg-gray-100"><PhoneIcon className="h-5 w-5 cursor-pointer text-green-600"/></td>
                            <td className="px-6 py-4 whitespace-nowrap bg-gray-100">{turnos.horaTurno}</td>
                            <td className="px-6 py-4 whitespace-nowrap bg-gray-100 flex items-center gap-3">
                                    <Link href={`/pacientes/turnoPaciente/${turnos.id}`} className="flex items-center">
                                        <CheckBadgeIcon className="h-5 w-5 cursor-pointer text-greenCustom-600" />
                                    </Link>

                                <XMarkIcon className="h-5 w-5 cursor-pointer text-red-500" />
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