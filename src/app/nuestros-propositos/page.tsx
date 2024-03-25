import {Hero} from '@/components/hero/Hero'

export default function Page() {
  return(
    <>
     <Hero title="Nuestros Propósitos"/>
     <section className='max-w-screen-xl mx-auto py-10 px-10'>
        <ul className="list-disc">
          <li>Defender nuestro medioambiente de la contaminación ambiental ocasionada por las empresas transnacionales que cuando se ven involucradas en casos de catástrofes ambientales o la violación de derechos humanos, la justicia tarda en llegar.</li>
          <li>Fomentar una alimentación sana, libre de transgénicos. </li>
          <li>Fortalecer la biodiversidad y preservar los conocimientos tradicionales.</li>
          <li>Promover la educación integral en todos los niveles y ámbitos, incluyendo de forma destacada: la educación ambiental, la educación igualitaria entre los sexos, la educación para la paz y fomento de actitudes pacifistas, la formación ocupacional</li>
          <li> Defender nuestro patrimonio histórico y cultural. Apoyo, promoción y representación de artistas e intelectuales.</li>
        </ul>
     </section>
    </>
   
  )
}