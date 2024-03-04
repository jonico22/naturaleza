import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from  "@radix-ui/react-icons";
import Link from 'next/link'

export const Header = () => {
  return(
    <div className="m-auto flex size-full max-w-screen-2xl items-center justify-between px-3 py-4 2xl:px-12">
      <div className="flex items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0">
        <Button  size="icon" aria-label="Menu" className="lg:hidden">
          <HamburgerMenuIcon className="stroke-inherit" />
        </Button>
        <Link href="/"> 
          <img src="/logo.png" alt="Naturela Hermana" width={200} />
        </Link>
      </div>
      <div className="hidden gap-10 md:flex">
        <div className="hidden gap-8 lg:flex">
          <Link href="/sobre-nosotros"> SOBRE NOSOTROS</Link>
          <Link href="/unete-a-nuestra-lucha/estadia-del-biolaboratorio-americano-namru-6-en-iquitos-peru">  ÚNETE A NUESTRA LUCHA</Link>
          <Link href="/noticias"> NOTICIAS </Link>
        </div>
        
      </div>
    </div>
  )
}