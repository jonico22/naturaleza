import { Button } from '@/components/ui/button';

function PostImageCard({ src, className }:any) {
  return (
    <div className="flex max-w-[600px] flex-col items-start gap-6 overflow-hidden">
      <div
        className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] center"
      >
        <img src={src} alt="" className={className} />
      </div>
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">
            Blog Post Heading
          </h3>
        </div>
        <Button >
        Ver más
      </Button>
      </div>
    </div>
  );
};

function BgCard() {
  return (
    <div className="flex max-w-md flex-col items-start gap-6 overflow-hidden rounded-xl border border-slate-200">
      <div
        className="flex w-full items-center justify-center bg-[url('https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat py-20 2xl:py-28"
      >
      </div>
      <div className="flex flex-col items-start gap-4 px-4 py-6 md:gap-6 md:px-8">
        <p className="text-2xl font-semibold tracking-tight">
          Headline
        </p>
        <p className="text-base text-slate-500">
           done it carefully and simply. Combined with the ingredients makes for beautiful landings.
        </p>
        <Button >
        Ver más
      </Button>
      </div>
    </div>
  );
};
export const Blog = () => {
  return(
    <section className="m-auto flex w-full max-w-screen-2xl flex-col gap-12 px-6 py-12 md:px-16">
    <div className="flex justify-between">
      <h3 className="text-4xl font-semibold text-slate-950">
        Ultimas Noticias
      </h3>
      
    </div>
    <div className="grid w-full grid-flow-row justify-items-start gap-x-0 gap-y-6 md:gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        <BgCard />
        <BgCard />
        <BgCard />
      </div>
    </section>
  )
}