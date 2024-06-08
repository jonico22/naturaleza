import { Main, Feature,Blog } from "@/components/home";
import { Banner } from "@/components/banner";
import { getListPost } from "@/actions/home";
export const dynamic = 'force-dynamic'
export default async function Home() {
  const post = await getListPost();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Main/>
      <Banner />
      <Feature/>
      <Blog post={post}/>
    </main>
  );
}
