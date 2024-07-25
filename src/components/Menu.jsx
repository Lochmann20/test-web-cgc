"use client"
 
import Link from 'next/link';
import { useState } from 'react';

 
/* menuOpen er sat til false, da den først skal åbne når man trykker på kanppen*/
export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <>   
{/*Mobil menu  */}
    <nav className='sm:hidden flex justify-between p-5'>
        <div>
            <Link href="/" prefetch={false}>CGC Wargaming</Link>
        </div> 

        <div className=''> 
          <button
          className='sm:hidden'
          onClick={toggleMenu}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
          </button>
        </div>
    </nav>  

    <div className={`fixed inset-0 bg-BlackBlack text-White transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50 sm:hidden flex flex-col`}>
        <div  className='p-5 flex justify-end bg-black'>
            <button
            className="text-White"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <ul className=''>
            <li className='grid text-center gap-3'>
                <Link href="/" prefetch={false}>About</Link>
                <Link href="/" prefetch={false}>Warhammer</Link>
                <Link href="/" prefetch={false}>Gallery</Link>
                <Link href="/" prefetch={false}>Contact</Link>
                <Link href="/" prefetch={false}>IG</Link>
                <Link href="/" prefetch={false}>Mail</Link>
            </li>
        </ul>
    </div>


    {/* desktop menu */}
    <nav className='p-5'>
        <ul className='sm:flex hidden justify-between gap-3'>
            <li className='flex gap-3'>
                <Link href="/Warhammer" prefetch={false}>Warhammer</Link>
                <Link href="/Gallery" prefetch={false}>Gallery</Link>
            </li>

            <li>
                <Link href="/" prefetch={false}>CGC Wargaming</Link>
            </li>

            <li className='flex gap-3'>
                <Link href="/About" prefetch={false}>About</Link>
                <Link href="/Contact" prefetch={false}>Contact</Link>
            </li>
        </ul>
    </nav>
    </>
  );
}