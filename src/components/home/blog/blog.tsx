import { oswald_font } from '@/lib/utils';
import Link from 'next/link'
import { env } from "@/env.mjs"

function BgCard({name,image,slug}:any) {
  return (
    <div className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg  overflow-hidden mx-auto mt-4">
    <img src={`${env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}?height=251`} className="w-full rounded-lg object-cover" style={{height:'251px', width:'100%'}} />
    <div className="px-4 my-6 text-center">
      <h3 className={"text-lg font-semibold " + oswald_font.className}>{name}</h3>
      <Link href={`/noticias/${slug}`} className='block mt-7 px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#333] hover:bg-[#222]'>
        LEER MÁS </Link>
    </div>
  </div>
  );
};
export const Blog = ({post}:any) => {
  return(
    <section className="bg-secondNature w-full py-5 px-5 mt-10">
        <div className="text-center mt-10">
          <h2 className={"text-3xl font-extrabold inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-primaryNature after:rounded-full " + oswald_font.className}>Últimas Noticias</h2>
        </div>
    
    <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10 max-md:max-w-lg mx-auto max-w-7xl">
        {
          post.map((item:any) => (
            <BgCard key={item.slug} name={item.title} image={item.imagen.filename_disk} slug={item.slug} />
          ))
        }
    </div>
    </section>
  )
}