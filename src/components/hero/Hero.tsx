import './styles.css'

type PropsHero = {
  title:string,
  style?:string
}
export const Hero = ({title,style='lg:h-[20vh]'}:PropsHero)=>{
  return(
    <div className="bg  px-6 sm:py-20 py-10 font-[sans-serif] ">
      <div className= {"max-w-screen-xl mx-auto text-center text-black flex items-center justify-center h-[30vh]" + style} >
        <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight">{title}</h1>
      </div>
    </div>
  )
}