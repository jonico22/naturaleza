
type PropsHero = {
  title:string
}
export const Hero = ({title}:PropsHero)=>{
  return(
    <div className="bg-gradient-to-b bg-primaryNature  px-6 sm:py-20 py-10 font-[sans-serif] ">
      <div className="max-w-screen-xl mx-auto text-center text-white flex items-center justify-center h-[40vh] lg:h-[20vh]">
        <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight">{title}</h1>
      </div>
    </div>
  )
}