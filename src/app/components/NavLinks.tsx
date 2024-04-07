'use client';

import {
    ListBulletIcon,
    CalendarDaysIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React from 'react';

const links = [
    {
        id: 1,
        name: 'Dashboard',
        href: '/dashboard',
        icon: CalendarDaysIcon,
    },
    {
        id: 2,
        name: 'My perfil',
        href: '/perfil',
        icon: ListBulletIcon,
    },
    {
        id: 3,
        name: 'Pacientes',
        href: '/pacientes',
        icon: UserIcon,
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <React.Fragment key={link.id}>
                        <Link
                            key={link.id}
                            href={link.href}
                            className={clsx(
                                ' bg-greenCustom-400 flex grow flex-col items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-greenCustom-300 hover:text-emerald-950 md:flex-none md:justify-start md:px-3 md:py-6',
                                {
                                    'bg-grayCustom-500 text-emerald-950':
                                        pathname === link.href,
                                },
                            )}
                        >
                            <LinkIcon className="w-6" />
                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                        <div className="border-2 border-b-greenCustom-400"></div>
                    </React.Fragment>
                );
            })}
        </>
    );
}