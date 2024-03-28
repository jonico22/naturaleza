import { oswald_font } from '@/lib/utils';
import { Navbar } from './navbar';
export const Header = () => {
  
  return(
    <div className="m-auto flex size-full max-w-screen-2xl items-center justify-between px-3 py-4 2xl:px-12">
     <Navbar fontText={oswald_font.className} />
    </div>
  )
}