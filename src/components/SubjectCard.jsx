"use client";

export default function SubjectCard({ subjects }) {
  console.log(subjects); // Debugging log

  return (
    <div className="flex flex-wrap gap-6 m-10">
      {subjects.map((subject, index) => (
        <div
          key={`${subject.subjectId}-${index}`}
          className="p-7 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-orange-500 inline-flex flex-col justify-start items-start gap-3 overflow-hidden"
        >
          <div className="w-96 flex flex-col justify-start items-start gap-5">
            <div className="inline-flex justify-start items-center gap-3">
              <div className="w-7 h-7 rounded-full border border-orange-500" />
              <div className="justify-start text-slate-700 text-2xl font-semibold font-[var(--nunito-sans)]">
                {subject.name}
              </div>
            </div>
            <div className="inline-flex justify-start items-start gap-5">
              <div className="inline-flex flex-col justify-start items-start gap-3">
                <div className="text-neutral-900 text-opacity-70 text-base font-normal">
                  Age group
                </div>
                <div className="text-orange-500 text-lg font-semibold">
                  {subject.ageGroup}
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-3">
                <div className="text-neutral-900 text-opacity-70 text-base font-normal">
                  Time duration
                </div>
                <div className="text-orange-500 text-lg font-semibold">
                  {subject.timeDuration}
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-3">
                <div className="text-neutral-900 text-opacity-70 text-base font-normal">
                  Subject ID
                </div>
                <div className="text-orange-500 text-lg font-semibold">
                  {subject.subjectId}
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-3">
                <div className="text-neutral-900 text-opacity-70 text-base font-normal">
                  Activities
                </div>
                <div className="text-orange-500 text-lg font-semibold">
                  {subject.activities}
                </div>
              </div>
            </div>
            <div className="px-3 py-2 bg-orange-200 bg-opacity-25 rounded-[10px] inline-flex justify-center items-center gap-3">
              <button className="text-orange-500 text-base font-semibold">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
