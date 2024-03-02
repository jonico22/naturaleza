export const Main = () => {
  return(
    <section
      className="flex size-full items-start justify-center bg-cover bg-center bg-no-repeat"
>
      <div
        className="flex max-w-screen-2xl flex-1 grow flex-col items-start justify-start gap-12 px-3 py-12 md:px-24 md:pt-24 xl:flex-row"
      >
        <div className="lx:px-36 mb-0 flex flex-1  xl:mb-24">
          <div className="flex max-w-lg flex-col gap-6 items-center justify-center">
            <h3 className="text-2xl font-semibold text-slate-950 md:text-4xl mt-12">
            Generar conciencia social e involucrar a la sociedad en la defensa de nuestros recursos naturales
            </h3>
          </div>
          
        </div>
        <div
          className="relative flex flex-1 flex-col w-full items-center justify-center  "
        >
           <img
          src="/main.png"
          alt="main"
          className="absolute"
          style={{top:'-8em'}}
        />
        </div>
      </div>
    </section>
  )
}