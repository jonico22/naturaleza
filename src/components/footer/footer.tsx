import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram,Linkedin } from "lucide-react"

function FooterColumnInfo() {
  return (
    <div className="flex flex-col">
      <p className="mb-4 text-sm font-semibold leading-tight text-blue-950">
        Comunícate con nosotros
      </p>
      <div className="flex flex-col gap-4">
        <a href="/" className="text-sm leading-tight text-slate-500">
        Whatsapp: +51 973681101
        </a>
        <a href="/" className="text-sm leading-tight text-slate-500">
        Email: contacto@naturalezahermana.com

        </a>
        <a href="/" className="text-sm leading-tight text-slate-500">
        Atención: <br/>
        De lunes a viernes de 9 a.m. a 6:00 p.m. <br/>
        y los sábados de 9 a.m. a 2:30 p.m.
        </a>
      </div>
    </div>
  );
};

function FooterColumn() {
  return (
    <div className="flex flex-col">
      <p className="mb-4 text-sm font-semibold leading-tight text-blue-950">
        Otras enlaces de interés
      </p>
      <div className="flex flex-col gap-4">
        <a href="/unete-a-nuestra-lucha/estadia-del-biolaboratorio-americano-namru-6-en-iquitos-peru" className="text-sm leading-tight text-slate-500">
        Únete a nuestra lucha
        </a>
        <a href="/sobre-nosotros" className="text-sm leading-tight text-slate-500">
        Sobre nosotros
        </a>
        <a href="/noticias" className="text-sm leading-tight text-slate-500">
         Noticias
        </a>
        <a href="/politica-de-privacidad" className="text-sm leading-tight text-slate-500">
          Politica de Privacidad 
        </a>
      </div>
    </div>
  );
};

function Copyright() {
  return (
    <p className="w-full text-xs text-slate-500">
      © Naturaleza Hermana 2024
    </p>
  );
};


export const Footer = () => {
  return(
    <div className="m-auto flex w-full max-w-screen-2xl flex-col gap-1 px-3 py-6 lg:px-12  mt-10">
      <div className="mb-6 flex w-full flex-col gap-12 lg:mb-24 lg:flex-row lg:gap-20">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left 2xl:grow">
          <img src="/logo.png" alt="Naturela Hermana" width={150} />
        </div>
        <div
          className="grid grow grid-cols-1 gap-12 text-center md:grid-cols-2 md:justify-items-center lg:grid-cols-2 lg:text-start 2xl:grow-0 2xl:gap-24"
        >
          <FooterColumnInfo />
          <FooterColumn />
        </div>
      </div>
      <Separator className="my-4" />
      <div
        className="flex w-full flex-col-reverse items-center gap-6 text-center lg:flex-row lg:items-center lg:gap-0 lg:text-left"
      >
        <Copyright />
        <div className="flex gap-8"> 
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </div>
  )
}