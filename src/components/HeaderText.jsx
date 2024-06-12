'use client'
import React from 'react'

function HeaderText() {
    return (
        <div className='w-full mt-12 pt-6 px-6 lg:pt-10 xl:pt-20 xl:pb-12 lg:pb-8 flex flex-col justify-center items-center text-textcol'>
            <h2 className={`text-center text-[30px] lg:text-[40px] xl:text-[40px] font-medium`}>Discover some of the best<br /> <span className={`text-button`}>Anime</span> and <span className={`text-button`}>Manga</span> here</h2>
            <p className={`mt-4 pt-2 tracking-wide text-textcol text-xs leading-2 `}>powered by <a href="https://jikan.moe/" className={`px-2 mx-2 py-1 bg-darkbg rounded-lg border-2 border-green-500/20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-button hover:text-black font-bold duration-300`}>Jikan Moe</a> </p>
        </div>
    )
}

export default HeaderText