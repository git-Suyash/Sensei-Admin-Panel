"use client";

export default function SubmoduleTopBar({ moduleTitle }) {
  // console.log(props)
  return (
    <div className="flex flex-row justify-between m-4 mx-8">
      <div className="text-slate-700 text-lg font-[var(--nunito-sans)] text-center mt-3">
        {moduleTitle}
      </div>
      <div className="flex justify-between items-center gap-6">
        <div className="inline-flex justify-start items-end gap-5">
          <button className="px-6 py-3 bg-orange-500 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-center items-center gap-2.5 font-[var(--nunito-sans)] text-white hover:cursor-pointer">
            + Add {moduleTitle}
          </button>
          <button className="px-6 py-2 rounded-[10px] outline outline-2 outline-offset-[-2px] outline-zinc-500 inline-flex justify-center items-center gap-1.5 text-lg font-semibold font-[var(--nunito-sans)] text-zinc-500 hover:cursor-pointer">
            {" "}
            Remove
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="grey"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>
          </button>
        </div>
        <div>
          <button className="w-28 bg-zinc-400 self-stretch px-8 py-2 rounded-[50px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5 text-white text-lg font-[var(--nunito-sans)] hover:cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="px-6 py-3 rounded-[10px] outline outline-2 outline-offset-[-2px] outline-Grays-Gray-3 inline-flex justify-center items-center gap-1.5">
    <div class="justify-start text-Grays-Gray-3 text-lg font-semibold font-['Nunito_Sans']">Remove</div>
    <div class="w-6 h-6 relative overflow-hidden">
        <div class="w-5 h-3 left-[2.25px] top-[5.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Grays-Gray-3"></div>
    </div>
</div> */
}
