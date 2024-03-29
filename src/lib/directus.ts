import { createDirectus, rest } from '@directus/sdk';
import { env } from "@/env.mjs"

const directus = createDirectus(env.NEXT_PUBLIC_DIRECTUS_URL).with(
  rest({
    onRequest: (options) => ({ ...options, cache: 'no-store'}),
  })
);

export default directus;