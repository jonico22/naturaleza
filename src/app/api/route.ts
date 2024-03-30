import directus from '@/lib/directus';
import { createItem  } from '@directus/sdk';

export async function POST(req: Request) {
  const {name,lastname,email,country,campaign} = await req.json()
  try {
    const response = await directus.request(
      createItem('petition', {
      name,
      lastname,
      email,
      country: country.value,
      campaign: campaign,
      status:'published'
    }));
    return Response.json(response, { status: 200 })
  } catch (error) {
    console.error(error, 'error');
    return new Response(` error: ${error}`, {
      status: 400,
    })
  }
  
}