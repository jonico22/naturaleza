import { oswald_font } from "@/app/layout"
export const Main = () => {
  return(
    <section
      className="w-full bg-secondNature pb-10" style={{minHeight:'58vh'}}>

      <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8  max-w-7xl max-md:max-w-md mx-auto px-2 py-2" >
        <div className="max-md:order-1 max-md:text-center mb-3" >
          <h3 className={"text-3xl font-bold lg:text-4xl " + oswald_font.className} >
                  Generar conciencia social e involucrar a la sociedad en la defensa de nuestros recursos naturales
          </h3>
        </div>
        <div className="md:h-[58vh]  mt-10" >
           <img src="/img-main.svg" alt="main" className="w-full h-full md:object-contain"/>
        </div>
      </div>
    </section>
  )
}