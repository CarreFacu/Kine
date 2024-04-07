import React from "react";
import PacientesTabla from "@/src/app/components/PacientesTabla";

export default function Pacientes({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    return (
        <PacientesTabla query={query} currentPage={currentPage} />
    )
}