import DayTracker from "@/src/app/components/DayTracker";
import Title from "@/src/app/components/Title";
import ImputSearch from "@/src/app/components/ImputSearch";
import Link from "next/link";
import {Button} from "@/src/app/components/Button";
import {PlusIcon} from "@heroicons/react/24/outline";
import React, {Suspense} from "react";
import PacientesTabla from "@/src/app/components/PacientesTabla";
import TurnoDashboardTable from "@/src/app/components/TurnoDashboardTable";

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
            </div>
            <Suspense key={query + currentPage} >
                <TurnoDashboardTable query={query} currentPage={currentPage} />
            </Suspense>
        </main>
    )
}