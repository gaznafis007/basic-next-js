"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const navItems = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Services',
            href: '/services',
        },
        {
            name: 'Contacts',
            href: '/contacts',
        },
        {
            name: 'Blogs',
            href: '/blogs',
        },
    ];
    return (
        <nav className='bg-slate-800 px-6 py-4 flex flex-row justify-between space-x-3'>
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

export default Navbar;