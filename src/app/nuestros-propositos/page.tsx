import {Hero} from '@/components/hero/Hero'

export default function Page() {
  return(
    <>
     <Hero title="Nuestros Propósitos"/>
     <section className='max-w-screen-xl mx-auto py-10 px-5'>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
        <div className="sm:flex items-center h-auto sm:p-8 px-7 py-10 rounded-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <img src="/prop01.svg" alt="" className='sm:max-w-[200px] object-cover sm:mr-10 mb-5' />
          <p className=" text-[#333] leading-relaxed">Defender nuestro medioambiente de la contaminación ambiental ocasionada por las empresas transnacionales que cuando se ven involucradas en casos de catástrofes ambientales o la violación de derechos humanos, la justicia tarda en llegar.</p>
        </div>
        <div className="sm:flex items-center h-auto sm:p-8 px-7 py-10 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <img src="/prop02.svg" alt="" className='sm:max-w-[200px] object-cover mb-5 mr-7 ' />
          <p className="text-[#333] leading-relaxed">Fomentar una alimentación sana, libre de transgénicos.</p>
        </div>
        <div className="sm:flex items-center  h-auto sm:p-8 px-7 py-10 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <img src="/prop03.svg" alt="" className='sm:max-w-[200px] object-cover mb-5 mr-7' />
          <p className="text-[#333] leading-relaxed">Fortalecer la biodiversidad y preservar los conocimientos tradicionales.</p>
        </div>
        <div className="sm:flex items-center h-auto sm:p-8 px-7 py-10 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
          <img src="/prop05.svg" alt="" className='sm:max-w-[200px] object-cover mb-5 mr-5' />
          <p className="  text-[#333] leading-relaxed">Defender nuestro patrimonio histórico y cultural. Apoyo, promoción y representación de artistas e intelectuales.</p>
        </div>
      </div>
      <div className="sm:flex sm:justify-center items-center h-auto sm:py-8 mt-7 px-7 py-10 rounded-md max-w-6xl shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
      <img src="/prop04.svg" alt="" className='sm:max-w-[380px] object-cover mb-5 mr-5' />
      <p className=" text-[#333] leading-relaxed">Promover la educación integral en todos los niveles y ámbitos, incluyendo de forma destacada: la educación ambiental, la educación igualitaria entre los sexos, la educación para la paz y fomento de actitudes pacifistas, la formación ocupacional</p>
      </div>

     </section>
    </>
   
  )
}