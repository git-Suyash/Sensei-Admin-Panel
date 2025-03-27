import Image from 'next/image';
import notFound from "@/assets/notFound.svg";

export default function NotFound({ moduleTitle }) {
  return (
    <div className='flex flex-col justify-center items-center gap-7 items-center self-center h-[calc(100vh-150px)]'>
    <div className="inline-flex flex-col justify-center items-center gap-6">
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="self-stretch text-center justify-start text-zinc-800 text-lg font-semibold font-[var(--nunito-sans)] uppercase">
          No { moduleTitle } found
        </div>
        <div className="w-[500px] text-center justify-start text-grey-400 text-base font-normal font-[var(--nunito-sans)]">
          Refresh page or add new { moduleTitle }, still facing issue ping it to product
          team.
        </div>
      </div>
      <div>
        <Image src= { notFound } alt="Not found svg" />
      </div>
    </div>
    </div>
  );
}
