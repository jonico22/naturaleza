import {Hero} from '@/components/hero/Hero'
export default function Page() {
  return(
   <>
    <Hero title="¡Gracias! ¡Ayuda a fortalecer esta campaña! "/>
    <section className='max-w-screen-xl mx-auto py-10 px-10'>
    <p>
    La estadía del NAMRU-6 en Perú, está rodeada de mucho secretismo. Da pie a pensar que podría tratarse de un centro de inteligencia de Estados Unidos para ejercer el control en el presente y el futuro de los recursos naturales de la región andino-amazónica. Así como también, que se trate de un centro de experimentación biogenética para la creación de nuevos virus con objetivos militares.

    </p> <br />
    <p>
    ¿Tienes dos minutos para reenviar la campaña a tus amigos y familiares? Es mucho más probable que la gente firme si la recibe en un mensaje directo. 
    </p> <br />
    <p>
    Puedes hacerlo usando los botones a continuación. ¡Gracias!
    </p>
    <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large">
      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
       className="fb-xfbml-parse-ignore" >Compartir</a></div>
    </section>
   </>
  )
}