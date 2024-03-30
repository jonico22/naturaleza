"use client"
import Link from 'next/link'
import React, { useState } from 'react';

export const Navbar = ({fontText}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
      setIsOpen(!isOpen);
  };
  return (
    <>
    <div className="flex items-center justify-start gap-10 min-w-[95%] lg:min-w-max lg:gap-0">
        <Link href="/" > 
          <img src="/logo.png" alt="Naturaleza Hermana" width={150} />
        </Link>
        <button id="toggle" className="lg:hidden ml-auto" onClick={handleClick} >
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className={isOpen ? "block" : "hidden"  +" gap-8 md:flex"}>
        <div className={isOpen ? "flex flex-col text-center border-t-2 mt-5" : "hidden" + " gap-8 lg:flex"}>
          <Link href="/sobre-nosotros" className={(isOpen ? "pt-5 pb-5 " : '') + fontText }> SOBRE NOSOTROS</Link>
          <Link href="/unete-a-nuestra-lucha/estadia-del-biolaboratorio-americano-namru-6-en-iquitos-peru" className={( isOpen ? "pt-5 pb-5 border-t-2 " : '')  + fontText}>  ÚNETE A NUESTRA LUCHA</Link>
          <Link href="/noticias" className={(isOpen ? "pt-5 border-t-2 " :'') + fontText}> NOTICIAS </Link>
        </div>
        
      </div>
    </>
  )
}