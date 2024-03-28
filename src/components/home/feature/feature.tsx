import { Button } from '@/components/ui/button';
import { oswald } from '@/app/layout';
import Link from 'next/link'
export const Feature = () => {
  return(
    <section className="w-full px-6 py-6">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl max-md:max-w-md mx-auto mt-10">
        <div className="md:h-[400px]">
          <img src="/feature2.svg" className="w-full h-full object-contain" />
        </div>
        <div className="max-md:text-center">
          <h3 className={"md:text-4xl text-3xl md:leading-10 font-bold " + oswald.className}> Nuestro Propósito</h3>
          <p className="mt-6 text-lg mb-6"> Defender nuestro medioambiente de la contaminación ambiental ocasionada por las empresas transnacionales que cuando se ven involucradas en casos de catástrofes ambientales o la violación de derechos humanos, la justicia tarda en llegar.</p>
          <Link href="/nuestros-propositos" className='px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#333] hover:bg-[#222]'>
          MAYOR INFORMACIÓN</Link>
        </div>
      </div>
    </section>
  )
}