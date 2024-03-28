import { Button } from '@/components/ui/button';
import { oswald_font } from '@/app/layout';

function BgCard({name,nameImage,description}:any) {
  return (
    <div className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg  overflow-hidden mx-auto mt-4">
    <img src={nameImage} className="w-full rounded-lg object-cover" style={{height:'251px', width:'100%'}} />
    <div className="px-4 my-6 text-center">
      <h3 className={"text-lg font-semibold " + oswald_font.className}>{name}</h3>
        <Button className={'px-6 py-2 w-full mt-10 rounded-lg text-sm tracking-wider font-semibold '} > LEER MÁS </Button>  
    </div>
  </div>
  );
};
export const Blog = () => {
  return(
    <section className="bg-secondNature w-full py-5 px-5 mt-10">
        <div className="text-center mt-10">
          <h2 className={"text-3xl font-extrabold inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-primaryNature after:rounded-full " + oswald_font.className}>Últimas Noticias</h2>
        </div>
    
    <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10 max-md:max-w-lg mx-auto max-w-7xl">
        <BgCard name={'¿Qué estudian los biolaboratorios de EE. UU. en Perú, Ucrania y el mundo?'} 
        nameImage={'/blog1.jpeg'} description={' El proyecto NAMRU- 6 está, totalmente, fuera del control del gobierno peruano porque sus miembros, inclusive, gozan del privilegio de inmunidad y por tanto cualesquiera que fuesen sus acciones quedan en el campo de la más absoluta impunidad.'}/>
        <BgCard name={'Alimentación en riesgo, mientras monopolios de fertilizantes se enriquecen'}
         nameImage={'/blog2.jpeg'} description={'¿Qué sucede con Perú si nuestras autoridades no tienen injerencia en la crisis mundial de alimentos y fertilizantes y dependen de lo que suceda en Europa? Estamos a su merced y de manos atadas.'}/>
        <BgCard name={'Venden pesticidas nocivos para la salud y ambiente'}
         nameImage={'/blog3.jpeg'} description={'En Perú las autoridades no tienen control del expendio de pesticidas prohibidos como el metamidofos, prohibido en 2020, y el carbofurano, restringido en 2022.'}/>
    </div>
    </section>
  )
}