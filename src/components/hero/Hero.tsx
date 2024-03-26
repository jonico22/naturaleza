import './styles.css'
import { oswald } from '@/app/layout'
type PropsHero = {
  title:string,
  style?:string
}
export const Hero = ({title,style='lg:h-[20vh]'}:PropsHero)=>{
  return(
    <div className="bg px-6 sm:py-20 py-10 ">
      <div className= {"max-w-screen-xl mx-auto text-center text-black flex items-center justify-center h-[30vh]" + style} >
        <h1 className={"text-5xl max-sm:text-3xl  font-bold "+ oswald.className}>{title}</h1>
      </div>
    </div>
  )
}