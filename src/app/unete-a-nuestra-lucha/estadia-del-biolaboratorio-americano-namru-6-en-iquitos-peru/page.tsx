import { FormRequest } from "./formRequest"
import { promises as fs } from 'fs';
import {Hero} from '@/components/hero/Hero'

 async function getLocalData() {
  const file = await fs.readFile(process.cwd() + '/src/lib/countries.json', 'utf8');
  // Parse data as json
  const objectData = JSON.parse(file);
  const options = objectData.map((item:any) => { 
    return { value: item.name, label: item.name }
  }); 
  return options;
}

export default async function Page() {
  const posts = await getLocalData()
  return(
    <>
    <Hero 
    style="lg:h-[30vh]"
    title="Exigimos esclarecer el motivo de la estadía del biolaboratorio americano namru-6 en iquitos, Perú"/>
    <section className="max-w-screen-xl mx-auto py-5 ">
    <div className="grid grid-flow-row-dense md:grid-cols-3 w-full">
        <div className="md:col-span-2 lg:col-span-2 px-5 py-5">
          <img src="/unete.webp" alt="unete" className="pb-5"/>
          <p>
          NAMRU-6 (Naval Medical Research Unit o en sus siglas en español Unidad de Investigación Médica Naval-6),
          es el único comando militar de Estados Unidos ubicado en Iquitos, Perú y tiene como misión oficial identificar
          enfermedades infecciosas que sean amenazas de importancia para la salud pública y militar, así como desarrollar 
          y evaluar intervenciones y productos para mitigar esas amenazas.
          </p>
          <br/>
          <p>
          Se trata de un laboratorio de investigación biomédica de la marina de Estados Unidos conectado con el Departamento de Defensa
          y el Pentágono de los Estados Unidos, así como con la Marina peruana y el Ministerio de Defensa del Perú.
          </p>
          <br/>
          <p>
          La estadía del NAMRU-6 en Perú, está rodeada de mucho secretismo. Da pie a pensar que podría tratarse de un centro de inteligencia
          de Estados Unidos para ejercer el control en el presente y el futuro de los recursos naturales de la región andino-amazónica.
            Así como también, que se trate de un centro de experimentación biogenética para la creación de nuevos virus con objetivos militares.
          </p>
          <br/>
        <p>
        Siendo el Perú entre los que mayor fuerza ha tenido el dengue y Loreto una de las regiones mayormente afectadas, surge una pregunta:
          ¿Cuál es el rol que cumplió el NAMRU-6 para prevenir o tratar los impactos del dengue?
        </p>
        <br/>
        <p>
        Estamos preocupados porque el NAMRU-6 podría constituir una amenaza presente contra los pueblos andino-amazónicos y los recursos
          naturales de sus territorios: bosques, agua, minerales, petróleo, principios activos de plantas y animales para encarar pandemias,
          pero también para desarrollar una guerra bacteriológica.
        </p>
        <br/>
        <p>
        Exhortamos a las autoridades peruanas a facilitar la información ante la ciudadanía peruana y solicitamos a la Organización
          de Naciones Unidas, ONU quien vela porque ningún país sea productor de armas de destrucción masiva, pueda hacer una visita a
          esta base en Iquitos, y verifique qué actividades están realizando con los estudios de las enfermedades infecciosas.
        </p>
        <br/>
        <strong className="block">Historia</strong>
        <br/>
        <p>
        La idea de NAMRU-6 se originó en 1978 con el impulso de Roberto Dileo Paoli, Director General de Sanidad de la Marina, 
          quien propuso a la Marina de los EE.UU. establecer un programa de medicina tropical con participación conjunta entre los EE.UU. y 
          las armadas peruanas. 
        </p>
        <br/>
        <p>
        Como producto de las negociaciones, en 1983 se suscribió el Convenio entre la República del Perú y los Estados Unidos de América
          donde se disponía el establecimiento en Lima de un destacamento del Instituto de Investigación Médica Naval de la Marina de los 
          Estados Unidos (NAMRID) con la misión de investigar enfermedades infectocontagiosas en diversas zonas geográficas del país. 
        </p>
        <br/>
         <p>
         En 1998, el nombre de NAMRID fue cambiado por el de NMRCD (Destacamento del Centro de Investigación Médica Naval).
          En el año 2010, recibió el nombre de NAMRU-6
         </p>
        </div>
        <div className="py-5 px-5  w-full">
          <p>Nuestra lucha recién inicia. Por favor lee con detenimiento y sé parte de una comunidad que busca respuestas concretas de nuestras autoridades.</p>
          <br/>
          <FormRequest options={posts}/>
          <br />
          <p>Continuando, das tu consentimiento a recibir los correos de Naturaleza Hermana.</p>
          <p>Nuestra <a href="/politica-de-privacidad" target="_blank" className="underline"> Política de Privacidad</a> protegerá tus datos y te explicará cómo pueden ser usadas. </p>
          <p>Puedes darte de baja en cualquier momento.</p>
        </div>
      </div>
    </section>
      
    </>
  )
}