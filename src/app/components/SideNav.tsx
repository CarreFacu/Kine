'use client';
import Link from 'next/link';
import NavLinks from '@/src/app/components/NavLinks';
import Logo from '@/src/app/components/Logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import UserLogIn from './UserLogIn';

export default function SideNav() {
    return (
        <div className="flex h-full flex-col bg-white px-3 py-4 md:px-2">
            <Link className="mb-2 p-4" href="/">
                <Logo />
            </Link>
                <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                    <NavLinks />
                    <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
                    <div>
                        <UserLogIn name='Apellido Nombre' />
                    </div>
                    <button
                        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-greenCustom-300 hover:text-emerald-950 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </div>
        </div>
    );
}