
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from 'react'

function NavLink({ id, name, path }) {

    const pathName = usePathname();
    return (
        <Link key={id} href={path} className={pathName == path ? 'text-button w-fit h-auto text-sm font-semibold' : 'text-textcol/40 text-sm w-fit h-auto hover:text-textcol hover:underline hover:underline-offset-4 transition-colors duration-500 '}>{name}</Link>
    )
}

export default NavLink