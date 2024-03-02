import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Naturaleza Hermana",
  author: "",
  description:"",
  keywords: [],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "",
  },
  links: {
    github: "",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
