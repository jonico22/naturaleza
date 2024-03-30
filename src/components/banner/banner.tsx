import Link from 'next/link'

export const Banner = () => {
  return (
    <div className="flex max-sm:flex-col items-center px-5 py-7 justify-center bg-primaryNature text-white  font-[sans-serif] w-full">
        <p className="text-lg text-center ">¿Sabías que existe un biolaboratorio americano en Iquitos?</p>
        <div className="max-sm:mt-4 sm:ml-6 flex gap-4 ">
            <Link href="/unete-a-nuestra-lucha/estadia-del-biolaboratorio-americano-namru-6-en-iquitos-peru" className=' bg-white text-black font-semibold py-2 px-4 rounded text-sm hover:bg-slate-100'>
            UNETE A LA PETICION</Link>
        </div>
    </div>
  )
}