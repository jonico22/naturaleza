import './styles.css'
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';
import {Hero} from '@/components/hero/Hero'
import { env } from "@/env.mjs"

interface Post {
  title: string;
  descripcion: string;
  imagen: {
    filename_disk: string;
  };
}

async function getPost(slug: string): Promise<Post> {
  try {
    const response = await directus.request(
      readItems('news' ,{
        fields: ['title', 'slug','descripcion','imagen',{ imagen: ['filename_disk'] }],
        filter: { slug: { _eq: slug } },
      })
    );
    const post: Post = {
      title: response[0].title,
      descripcion: response[0].descripcion,
      imagen: {
        filename_disk: response[0].imagen.filename_disk
      }
    };
    return post;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

export default async function DynamicPage({ params }:any) {
	const post = await getPost(params.slug);
	return (
		<> 
    <Hero title={post.title}/>
    <section className='text-lg max-w-screen-xl mx-auto py-10 px-10'>
      <img src={`${env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.imagen.filename_disk}`} alt="post" className=' min-h-[250px] h-full object-cover px-5 py-5 m-auto' />
			<div dangerouslySetInnerHTML={{ __html: post.descripcion }}></div>
    </section>
		</>
	);
}