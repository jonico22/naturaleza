import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from  "@radix-ui/react-icons";
import Link from 'next/link'
import { oswald } from '@/app/layout';

export const Header = () => {
  return(
    <div className="m-auto flex size-full max-w-screen-2xl items-center justify-between px-3 py-4 2xl:px-12">
      <div className="flex items-center justify-start gap-10 min-w-[95%] lg:min-w-max lg:gap-0">
        <Link href="/" > 
          <img src="/logo.png" alt="Naturela Hermana" width={150} />
        </Link>
        <button id="toggle" className="lg:hidden ml-auto">
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="hidden gap-8 md:flex">
        <div className="hidden gap-8 lg:flex">
          <Link href="/sobre-nosotros" className={oswald.className}> SOBRE NOSOTROS</Link>
          <Link href="/unete-a-nuestra-lucha/estadia-del-biolaboratorio-americano-namru-6-en-iquitos-peru" className={oswald.className}>  ÚNETE A NUESTRA LUCHA</Link>
          <Link href="/noticias" className={oswald.className}> NOTICIAS </Link>
        </div>
        
      </div>
    </div>
  )
}