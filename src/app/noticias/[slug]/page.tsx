import './styles.css'
import {Hero} from '@/components/hero/Hero'
import { env } from "@/env.mjs"
import { getPost } from '@/actions';
export const dynamic = 'force-dynamic'
export default async function DynamicPage({ params }:any) {
	const post = await getPost(params.slug);
	return (
		<> 
    <Hero title={post.title}/>
    <section className='text-lg max-w-screen-xl mx-auto py-10 px-10 blog'>
      <img src={`${env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.imagen.filename_disk}`} alt="post" className='min-h-[250px] h-full object-cover px-5 py-5 m-auto' />
			<div dangerouslySetInnerHTML={{ __html: post.descripcion }}></div>
    </section>
		</>
	);
}