import React, { Suspense } from "react";
import PacientesTabla from "@/src/app/components/PacientesTabla";
import Title from '@/src/app/components/Title';
import ImputSearch from "@/src/app/components/ImputSearch";
import Link from "next/link";
import {
  PlusIcon,
} from '@heroicons/react/24/outline';
import { Button } from "@/src/app/components/Button";

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
          <Link href="/pacientes/new">
            <Button className="text-lg font-medium" type="submit">
              <PlusIcon className="mr-1 h-5 w-5" aria-hidden="true" />
              Crear
            </Button>
          </Link>
        </div>
      </div>
      <Suspense key={query + currentPage} >
        <PacientesTabla query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  )
}