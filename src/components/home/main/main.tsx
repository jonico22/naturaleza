export const Main = () => {
  return(
    <section
      className="flex size-full items-start justify-center bg-[url('https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat"
>
      <div
        className="flex max-w-screen-2xl flex-1 grow flex-col items-start justify-start gap-12 px-3 py-12 md:px-24 md:pt-24 xl:flex-row"
      >
        <div className="lx:px-36 mb-0 flex flex-1 flex-col items-start gap-12 xl:mb-24">
          <div className="flex max-w-lg flex-col gap-6">
            <h3 className="text-3xl font-semibold text-slate-950 md:text-5xl">
            Generar conciencia social e involucrar a la sociedad en la defensa de nuestros recursos naturales
            </h3>
          </div>
          
        </div>
        <div
          className="relative flex flex-1 flex-col w-full items-center justify-center bg-slate-50  "
        >
           <img
          src="https://www.tailframes.com/images/illustration.webp"
          alt=""
          width={183}
          height={345}
          className="h-[172px] w-[91px] md:h-[345px] md:w-[183px]"
        />
        </div>
      </div>
    </section>
  )
}