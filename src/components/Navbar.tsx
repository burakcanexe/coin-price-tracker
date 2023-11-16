import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Navbar() {
    return (
        <div className='h-14 flex justify-between items-center container mx-auto px-10'>
            <h1 className='text-white font-semibold text-lg'>Coin Price Tracker</h1>
            <Link href={'https://github.com/burakcanexe/coin-price-tracker'} target='_blank'>
                <FaGithub className='text-white w-6 h-6 hover:text-indigo-500 duration-200' />
            </Link>
        </div>
    )
}

export default Navbar
