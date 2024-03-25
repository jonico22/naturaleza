export const Main = () => {
  return(
    <section
      className="flex size-full items-start justify-center bg-cover bg-center bg-no-repeat"
>
      <div
        className="flex max-w-screen-2xl flex-1 grow flex-col-reverse items-start justify-start gap-12 px-3 md:px-12 xl:flex-row"
      >
        <div className="lx:px-36 mb-0 flex flex-1 ">
          <div className="flex  flex-col gap-6 items-center justify-center w-full" style={{height:'58vh'}}>
            <h3 className="text-2xl font-semibold text-slate-950 lg:text-4xl" style={{textAlign:'center'}}>
            Generar conciencia social e involucrar a la sociedad en la defensa de nuestros recursos naturales
            </h3>
          </div>
          
        </div>
        <div className="relative flex flex-1 flex-col w-full items-center justify-center" style={{minHeight:'58vh'}}>
           <img src="/main.png" alt="main" />
        </div>
      </div>
    </section>
  )
}