import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className='w-[100%] h-[90px]  flex items-center justify-between  bg-vilote text-white'>
            <div className='flex items-center justify-around bg-colorIcon w-full h-full header '>
                <img src="/logo.png" alt="logo" className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]' />

                <nav className='flex items-center gap-6 md:gap-12'>
                    <Link href={"/"} className="hover:text-gray-300">Home</Link>
                    <Link href={"/about"} className="hover:text-gray-300">About</Link>
                </nav>
            </div>
        </header>
    )
}
