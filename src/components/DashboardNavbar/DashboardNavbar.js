"use client";
import Link from 'next/link';
import { usePathname} from 'next/navigation';
import React from 'react';

const DashboardNavbar = () => {
    const pathname = usePathname();
    const navItems = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'All User',
            href: '/allUsers',
        },
        {
            name: 'Create User',
            href: '/createUser',
        },
        {
            name: 'Services',
            href: '/services',
        },
        {
            name: 'Dynamics',
            href: '/dynamic',
        },
        {
            name: 'Sales',
            href: '/sales',
        }
    ];
    return (
        <nav className='bg-zinc-800 px-6 py-4 flex flex-row justify-between space-x-3 items-center'>
            <h2 className="text-white text-2xl">Next <span className="text-slate-400">Hero</span></h2>
            <ul className="flex flex-row space-x-2">
                {
                    navItems.map(item => (
                        <li key={item?.name}>
                            <Link className={`${pathname === item?.href ? 'text-slate-400' : 'text-white'} cursor-pointer hover:text-slate-400`} href={item?.href}>{item?.name}</Link>
                        </li>
                    ))
                }
            </ul>
            
        </nav>
    );
};

export default DashboardNavbar;