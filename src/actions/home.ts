import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

export async function getListPost() {
  try {
    const response = await directus.request(
      readItems('news' ,{
        fields: ['title', 'slug','imagen',{ imagen: ['filename_disk'] }],
        filter: { isHome: { _eq: 1 } },
      })
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}