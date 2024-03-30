import directus from '@/lib/directus';
import { notFound } from 'next/navigation';
import { readItems } from '@directus/sdk';
import {Hero} from '@/components/hero/Hero'
import { FormRequest } from "./formRequest"
import { env } from "@/env.mjs";
import { getLocalData } from "@/lib/utils";
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getSeo(slug:string) {
	try {
		const page = await directus.request(readItems('campaign',{
      fields: ['title','meta_description','og_image',{ og_image: ['filename_disk'] }],
      filter: { slug: { _eq: slug } },
    }));
		return page[0];
	} catch (error) {
    console.error(error, 'error 2');
	}
}

export async function generateMetadata( { params }: Props,
  parent: ResolvingMetadata) {
  try {
    const page = await getSeo(params.slug);
    let siteConfig = {
      name:'',
      description:'',
      ogImage:'',
      url:{
        base : `${env.NEXT_PUBLIC_APP_URL}/unete-a-nuestra-lucha/${params.slug}`
      }
    }
    siteConfig.name = page?.title || '';
    siteConfig.description = page?.meta_description || '';
    siteConfig.ogImage = `${env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${page?.og_image?.filename_disk || ''}`;
    return {
      title: {
        default: siteConfig.name,
        template: `${ siteConfig.name} | %s  `,
      },
      description: siteConfig.description,
      openGraph: {
        type: "website",
        locale: "en_ES",
        url: siteConfig.url.base,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
          {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig.name,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
      },
    }
  } catch (error) {
    console.error(error);
  }
  
  
}


async function getPage(slug:string) {
	try {
		const page = await directus.request(readItems('campaign',{
      fields: ['title', 'id','description','imagen',{ imagen: ['filename_disk'] }],
      filter: { slug: { _eq: slug } },
    }));
		return page[0];
	} catch (error) {
    console.error(error, 'error');
		notFound();
	}
}



export default async function DynamicPage({ params }:any) {
	const page = await getPage(params.slug);
  const countries = await getLocalData()
	return (
		<>
			 <Hero style="lg:h-[30vh]" title={page.title}/>
			<section className="max-w-screen-xl mx-auto py-5 ">
      <div className="grid grid-flow-row-dense md:grid-cols-3 w-full">
        <div className="md:col-span-2 lg:col-span-2 px-5 py-5">
        <img src={`${env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${page.imagen.filename_disk}`} alt="" className='mb-5' />
        <div dangerouslySetInnerHTML={{ __html: page.description }}></div>
        </div>
        <div className="py-5 px-5  w-full">
          <p>Nuestra lucha recién inicia. Por favor lee con detenimiento y sé parte de una comunidad que busca respuestas concretas de nuestras autoridades.</p>
          <br/>
          <FormRequest options={countries} campaign={page.id}/>
          <br />
          <p>Continuando, das tu consentimiento a recibir los correos de Naturaleza Hermana.
          Nuestra <a href="/politica-de-privacidad" target="_blank" className="underline"> Política de Privacidad</a> protegerá tus datos y te explicará cómo pueden ser usadas. 
          Puedes darte de baja en cualquier momento.</p>
        </div>
      </div>
      </section>
      
		</>
	);
}