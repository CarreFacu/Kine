import React, { Suspense } from "react";
import PacientesTabla from "@/src/app/components/PacientesTabla";
import Title from '@/src/app/components/Title';
import ImputSearch from "@/src/app/components/ImputSearch";

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
        <main>
        <div className="px-5 py-3">
          <Title title="Listado de Pacientes" />
          <div className="flex justify-between py-5">
            <div>
              <ImputSearch placeholder="Buscar" />
            </div>
          </div>
        </div>
        <Suspense key={query + currentPage} >
          <PacientesTabla query={query} currentPage={currentPage} />
        </Suspense>
      </main>
    )
}