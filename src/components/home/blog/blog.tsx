import { Button } from '@/components/ui/button';
function PostImageCard({ src, className }:any) {
  return (
    <div className="flex max-w-[600px] flex-col items-start gap-6 overflow-hidden">
      <div
        className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] center"
      >
        <img src={src} alt="" className={className} />
      </div>
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">
            Blog Post Heading
          </h3>
        </div>
        <Button >
        Ver más
      </Button>
      </div>
    </div>
  );
};

function BgCard({name,nameImage,description}:any) {
  return (
    <div className="flex max-w-md flex-col items-start gap-6 overflow-hidden rounded-xl border border-slate-200">
      <div
        className={"flex w-full items-center justify-center bg-[url(https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat "}
      >
        <img src={nameImage} alt="list" height={251} style={{height:'251px', width:'100%', objectFit:'cover'}}/>
      </div>
      <div className="flex flex-col items-start gap-4 px-4 py-6 md:gap-6 md:px-8">
        <p className="text-2xl font-semibold tracking-tight" style={{minHeight:'96px'}}>
          {name}
        </p>
        <p className="text-base text-slate-500" style={{textAlign:'justify', minHeight:'144px'}}>
          {description}
        </p>
        <Button> Leer más </Button>
      </div>
    </div>
  );
};
export const Blog = () => {
  return(
    <section className="m-auto flex w-full max-w-screen-2xl flex-col gap-12 px-6 py-12 md:px-16">
    <div className="flex justify-between">
      <h3 className="text-4xl font-semibold text-slate-950">
        Ultimas Noticias
      </h3>
    </div>
    <div className="grid w-full grid-flow-row justify-items-start gap-x-0 gap-y-6 md:gap-6 lg:grid-cols-2 2xl:grid-cols-3">
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