import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='container mx-auto px-10 flex justify-center'>
            <span className='text-white'>from <Link href={'https://burakcan.dev'} target='_blank' className='font-semibold hover:text-indigo-500 duration-200'>Burak Can Yıldırım</Link></span>
        </div>
    )
}

export default Footer
