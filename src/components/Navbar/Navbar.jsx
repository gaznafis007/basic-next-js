"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
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
        {
            name: 'Posts',
            href: '/posts',
        },
        {
            name: 'Dashboard',
            href: '/dashboard',
        },
    ];
    const loginHandler = () =>{
        router.push('/login');
    }
    if(pathname === '/dashboard'){
        return <DashboardNavbar/>
    }
    return (
        <nav className='bg-slate-800 px-6 py-4 flex flex-row justify-between space-x-3 items-center'>
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
            <button onClick={loginHandler} className='bg-white px-4 py-2 rounded-md text-slate-800 font-semibold text-lg'>Login</button>
        </nav>
    );
};

export default Navbar;