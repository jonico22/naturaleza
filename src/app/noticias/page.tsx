import {Hero} from '@/components/hero/Hero'
import { env } from "@/env.mjs"
import Link from 'next/link'
import { getPosts } from '@/actions';

export const dynamic = 'force-dynamic'
export default async function Page() {

  const posts = await getPosts();
  return(
   <>
    <Hero title="Noticias"/>
    <section className='max-w-screen-xl mx-auto py-10 px-10'>
    <div className="grid grid-cols-1  gap-8 mt-10">
      {
        posts.map((post) => (
          <div key={post.slug} className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
            <img src={`${env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.imagen.filename_disk}?height=300&width=480`} alt={post.title} className="lg:w-2/5 min-h-[250px] h-full object-cover" />
            <div className="p-6 lg:w-3/5">
              <h3 className="text-xl font-bold text-[#333]">{post.title}</h3>
              <div className="text-lg mt-4 mb-6" dangerouslySetInnerHTML={{ __html: post.sumary }}></div>
              <Link href={`/noticias/${post.slug}`} className=" px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#333] hover:bg-[#222]"> 
              LEER MÁS
              </Link>
            </div>
          </div>
        ))
      }
    </div>
    </section>
   </>
  )
}