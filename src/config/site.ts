import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Naturaleza Hermana",
  author: "Melissa Rubio",
  description:"ESTAMOS COMPROMETIDOS CON LA CONSERVACIÓN DEL MEDIO AMBIENTE Y LA SALUD DE LA POBLACIÓN PERUANA",
  keywords: ['organizacion','naturaleza', 'ong','organización', 'fundación', 'namru', 'conciencia social', 'social', 'naturaleza', 'recursos naturales', 'defensa', 'medioambiente', 'contaminacion', 'contaminacion ambiental', 'ambiental', 'biodiversidad', 'educacion', 'educacion ambiental', 'diversidad', 'patrimonio', 'patrimonio cultural', 'patrimonio historico', 'artistas', 'intelectuales', 'pensadores', 'apoyo', 'promocion', 'representacion', 'namru', 'NAMRU-6', 'Namru-South', 'Namru south', 'NAMRID', 'NMRCD', 'naval', 'militar', 'marina', 'pentagono', 'biogenética', 'dengue', 'Iquitos', 'Loreto', 'Estados Unidos', 'amenazas', 'guerra', 'salud', 'salud pública', 'enfermedades', 'enfermedades tropicales', 'infecciones', 'infecciosas', 'tropicales', 'bacteria', 'bacteriológica', 'ONU', 'investigación', 'aportes', 'científicos', 'INS', 'Minsa', 'bioseguridad', 'inmune', 'inmunidad', 'biomédica', 'biomédico', 'inteligencia', 'patógenos', 'transgénicos', 'ovm', 'ogm', 'malaria', 'zika', 'edicion', 'genetica', 'arbovirus', 'diarrea', 'norovirus', 'chikungunya', 'Leishmaniasis', 'influenza', 'virus', 'viajero', 'leptospirosis', 'Leptospira', 'resistencia', 'bacteriana', 'REDCEI', 'laboratorios', 'biolaboratorio', 'respiratorio', 'epidemicos', 'epidemia', 'pandemia', 'endemica', 'armadas', 'epidemiológica', 'vigilancia', 'pacientes', 'brotes', 'organismos', 'moratoria', 'farmacéuticas', 'trasnacionales', 'Biotecnología', 'cultivos'],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "",
  },
  links: {
    github: "",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
