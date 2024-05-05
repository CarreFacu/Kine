
import Title from "@/src/app/components/Title";
import ImputSearch from "@/src/app/components/ImputSearch";
import React, {Suspense} from "react";
import TurnoDashboardTable from "@/src/app/components/TurnoDashboardTable";
import Link from "next/link";
import {Button} from "@/src/app/components/Button";
import {PlusIcon} from "@heroicons/react/24/outline";

export default function Dashboard({
                                      searchParams,
                                  }: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}){
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    return(
        <main>
            <div className="px-5 py-3">
                <Title title="Dashboard" />
                <div className="flex justify-between py-5">
                    <div>
                        <ImputSearch placeholder="Buscar" />
                    </div>
                </div>
                <Link href="/turnos/new">
                    <Button className="text-lg font-medium" type="submit">
                        <PlusIcon className="mr-1 h-5 w-5" aria-hidden="true" />
                        Crear
                    </Button>
                </Link>
            </div>
            <Suspense key={query + currentPage} >
                <TurnoDashboardTable query={query} currentPage={currentPage} />
            </Suspense>
        </main>
    )
}