import Image from "next/image";
import { Main, Feature,Blog } from "@/components/home";
import { Banner } from "@/components/banner";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Main/>
      <Banner />
      <Feature/>
      <Blog/>
    </main>
  );
}
