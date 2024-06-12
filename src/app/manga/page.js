import Discover from '@/components/Discover'
import Trending from '@/components/Trending'
import React from 'react'

function Manga() {
    return (
        <div className={`w-full min-h-screen flex flex-col pb-12 lg:pb-4`}>
            <Discover type={'manga'} />
            <Trending type={'manga'} />
        </div>
    )
}

export default Manga