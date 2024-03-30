import {Hero} from '@/components/hero/Hero'
import { env } from '@/env.mjs';
import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';
import { Share } from '@/components/share/Share';

async function getCampaign(id:string) {
	try {
		const page = await directus.request(readItem('campaign', Number(id),{
      fields: ['slug','title','meta_description']
    }));
		return page;
	} catch (error) {
		console.error(error);
	}
}

export default async function Page({ searchParams }:any) {
 const page = await getCampaign(searchParams.id);
  return(
   <>
    <Hero title="¡Gracias! ¡Ayuda a fortalecer esta campaña! "/>
    <section className='max-w-screen-lg text-lg mx-auto py-10 px-10'>
     <div className='grid sm:grid-cols-2 items-center gap-4 '>
     <img src="/social.svg" alt="" className='min-h-[150px] object-cover px-5 py-5 m-auto' />
      <div>
      <p>
    La estadía del NAMRU-6 en Perú, está rodeada de mucho secretismo. Da pie a pensar que podría tratarse de un centro de inteligencia de Estados Unidos para ejercer el control en el presente y el futuro de los recursos naturales de la región andino-amazónica. Así como también, que se trate de un centro de experimentación biogenética para la creación de nuevos virus con objetivos militares.
    </p>
    <p>
    ¿Tienes dos minutos para reenviar la campaña a tus amigos y familiares? Es mucho más probable que la gente firme si la recibe en un mensaje directo. 
    </p>
      </div>
      </div> 
   
    
    <p className='text-center pt-5'>
    Puedes hacerlo usando los botones a continuación. ¡Gracias!
    </p>
    <Share url={`${env.NEXT_PUBLIC_APP_URL}/unete-a-nuestra-lucha/${page?.slug}`} 
    title={page?.title} description={page?.meta_description}/>
    </section>
   </>
  )
}