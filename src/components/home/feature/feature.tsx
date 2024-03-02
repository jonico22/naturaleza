import { Button } from '@/components/ui/button';
export const Feature = () => {
  return(
    <section
      className="m-auto grid w-full max-w-screen-2xl grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 px-3 
      py-6 text-center md:gap-x-14 md:px-16 md:py-14 lg:grid-cols-2 lg:text-start "
>
      <div
        className="flex w-full max-w-2xl items-center justify-center justify-self-end rounded-2xl bg-slate-50 py-20 md:py-32"
      >
        <img
          src="https://www.tailframes.com/images/illustration.webp"
          alt=""
          width={183}
          height={345}
          className="h-[172px] w-[91px] md:h-[345px] md:w-[183px]"
        />
      </div>
      <div className="flex flex-col gap-6 justify-self-start md:gap-12">
        <div className="flex max-w-lg flex-col gap-6">
          <h3 className="text-4xl font-semibold text-slate-950 md:text-5xl">
          Nuestro Proposito
          </h3>
          <h4 className="text-lg font-normal tracking-tight text-slate-500">
          Fomentar una alimentación sana, libre de transgénicos.
          </h4>
        </div>
        <div>
          <Button>
           Mayor información
          </Button>
        </div>
      </div>
    </section>
  )
}