"use client";

import { useState } from "react";
import SubjectTopBar from "./ui/AddSubjectBar";

const SubjectForm = () => {
  const [ageGroup, setAgeGroup] = useState("");
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [subjectName, setSubjectName] = useState("");
  const [subjectID, setSubjectID] = useState("Auto-generated");

  return (
    <>
    <SubjectTopBar />
    <div className="p-6 m-6 w-[50vw] ">
      <div className="first-line flex flex-col-3 gap-6 justify-between">
      <div>
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Age Group
        </label>
        <select
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none"
        >
          <option value="" disabled>
            Select
          </option>
          <option value="0-3">0-3</option>
          <option value="4-6">4-6</option>
          <option value="7-9">7-9</option>
          <option value="10-12">10-12</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Time duration (Months)
        </label>
        <div className="flex items-center">
          <button
            className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg"
            onClick={() => setDuration(Math.max(0, duration - 1))}
          >
            -
          </button>
          <span className="text-lg font-medium px-4">
            {duration < 10 ? `0${duration}` : duration}
          </span>
          <button
            className="bg-orange-500 text-white px-3 py-1 rounded-lg"
            onClick={() => setDuration(duration + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Progress
        </label>
        <div className="flex items-center">
          <input
            type="number"
            min="0"
            max="10"
            value={progress}
            onChange={(e) =>
              setProgress(Math.min(10, Math.max(0, Number(e.target.value))))
            }
            className="w-14 p-2 border text-center rounded-lg bg-gray-100 focus:outline-none"
          />
          <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-lg ml-2">
            out of 10
          </span>
        </div>
      </div>
      </div>

      <div className="col-span-2 grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Subject Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Subject ID
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg bg-gray-200 text-gray-500 focus:outline-none"
            value={subjectID}
            disabled
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default SubjectForm;
