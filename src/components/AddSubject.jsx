"use client";

import React, { useState } from "react";
// import { ChevronDown } from 'lucide-react';

export default function AddSubject() {
  const [subjectName, setSubjectName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [timeDuration, setTimeDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <div className="w-full inline-flex flex-col justify-start items-start gap-7 m-10">
      <div className="inline-flex justify-start items-center gap-16">
        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className="justify-start text-black text-sm font-normal font-[var(--nunito-sans)]">
            Subject ID
          </div>
          <div className="w-48 min-w-44 px-6 py-3 bg-white rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.06)] inline-flex justify-start items-center gap-2.5">
            <div className="opacity-50 justify-start text-zinc-900 text-base font-light font-[var(--nunito-sans)]">
              Auto-generated
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className="justify-start text-black text-sm font-normal font-[var(--nunito-sans)]">
            Subject Name
          </div>
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            placeholder="Type here"
            className="w-96 min-w-44 px-6 py-3 bg-white rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.06)] inline-flex justify-start items-center gap-2.5 text-base font-semibold font-[var(--nunito-sans)] placeholder:opacity-25 placeholder:text-zinc-900"
          />
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-20">
        <div className="h-20 inline-flex flex-col justify-between items-start">
          <div className="justify-start text-black text-sm font-normal font-[var(--nunito-sans)]">
            Age Group
          </div>
          <div className="relative w-56 min-w-28 px-6 py-3 bg-white rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.06)] inline-flex justify-between items-center">
            <select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              className="w-full appearance-none pr-8 text-zinc-00 text-base font-semibold font-[var(--nunito-sans)] focus:outline-none"
            >
              <option value="">Select</option>
              <option value="0-5">0-5</option>
              <option value="6-10">6-10</option>
              <option value="11-15">11-15</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.0}
              stroke="orange"
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 size-6 transition-transform ${
                ageGroup ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

        <div className="h-20 inline-flex flex-col justify-between items-start">
          <div className="justify-start text-black text-sm font-normal font-[var(--nunito-sans)]">
            Time duration (Months)
          </div>
          <div className="w-28 min-w-28 bg-white rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.06)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <button
              onClick={() => setTimeDuration(Math.max(0, timeDuration - 1))}
              className="flex-1 self-stretch p-2.5 bg-Grays-Gray-6 inline-flex flex-col justify-center items-center gap-2.5"
            >
              <div className="justify-start text-Grays-Gray text-lg font-bold font-[var(--nunito-sans)]">
                -
              </div>
            </button>
            <div className="opacity-25 justify-start text-zinc-900 text-base font-semibold font-[var(--nunito-sans)]">
              {timeDuration.toString().padStart(2, "0")}
            </div>
            <button
              onClick={() => setTimeDuration(timeDuration + 1)}
              className="flex-1 self-stretch p-2.5 bg-orange-500 inline-flex flex-col justify-center items-center gap-2.5"
            >
              <div className="justify-start text-white text-lg font-bold font-[var(--nunito-sans)]">
                +
              </div>
            </button>
          </div>
        </div>
        <div className="w-40 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch justify-start text-black text-sm font-normal font-[var(--nunito-sans)]">
            Progress
          </div>
          <div className="self-stretch rounded-[10px] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.06)] inline-flex justify-start items-center overflow-hidden">
            <div className="flex-1 self-stretch p-2.5 bg-Grays-White inline-flex flex-col justify-center items-center gap-2.5">
              <div className="self-stretch text-center justify-start text-Grays-Gray text-base font-semibold font-[var(--nunito-sans)]">
                {progress.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="h-11 p-2.5 bg-orange-500 inline-flex flex-col justify-center items-center gap-2.5">
              <div className="justify-start text-white text-lg font-normal font-[var(--nunito-sans)]">
                out of 10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
