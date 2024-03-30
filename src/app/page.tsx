import { Main, Feature,Blog } from "@/components/home";
import { Banner } from "@/components/banner";
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

async function getPost() {
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

export default async function Home() {
  const post = await getPost();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Main/>
      <Banner />
      <Feature/>
      <Blog post={post}/>
    </main>
  );
}
