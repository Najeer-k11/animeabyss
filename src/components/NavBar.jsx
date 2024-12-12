
'use client'
import React, { useRef, useState } from 'react'
import NavLink from './NavLink'
import navlinks from '../components/constants'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] })

function NavBar() {

    const [search, setSearch] = useState('');

    function handleSearch(value) {
        setSearch(value);
    }

    return (
        <nav className={`w-full sticky flex justify-between items-center`}>
            {/* Title  */}
            <div key={`title`} className={``} id='title'>
                <h1 className={`font-sans ${pacifico.className} text-button font-bold md:text-[24px] text-[20px] xl:text-[28px] 2xl:text-[30px] lg:text-[28px]`}>
                    Anime Bliss
                </h1>
            </div>

            {/* Nav Links */}
            <div key={`links`} className={`w-auto hidden max-w-xl  lg:gap-8 lg:flex lg:justify-between`}>
                {
                    navlinks.map((link) => (<NavLink key={link.id} id={link.id} name={link.name} path={link.path} />))
                }
            </div>

            {/* search bar */}
            <div key={`searchbar`} className={`w-auto lg:h-[45px] h-[35px] md:h-[45px] flex gap-4`}>
                <input className='w-full rounded-full lg:text-sm text-xs xl:text-sm p-3 placeholder:text-textcol/11 border-textcol/5 border-2 placeholder:dark:text-textcol/11 bg-search text-textcol dark:text-textcol' type="search" name="" placeholder='search here' value={search} onChange={(e) => { handleSearch(e.target.value) }} id="" />
                <button className={`rounded-full xl:h-[45px] xl:w-[45px] w-[32px] h-[32px] lg:h-[45px] lg:w-[45px] px-2 flex justify-center border-textcol/5 border-2  items-center bg-button hover:bg-green-500 transition-colors duration-500`} type="submit">
                    <Link href={`search/${search}`}>
                        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </Link>
                </button>
            </div>
        </nav>
    )
}

export default NavBar