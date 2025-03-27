"use client";
import { useState } from "react";

export default function SideBar() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(true);
  const [activeItem, setActiveItem] = useState({
    category: "Learning Modules",
    subItem: "Subjects",
  });

  const onDropDownClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleItemClick = (category, subItem) => {
    setActiveItem({ category, subItem });
  };

  const learningModuleItems = [
    "Subjects",
    "Modules",
    "Sub-Modules",
    "Interactive Activities",
    "Digital Activities",
    "Feedback",
  ];

  const mainMenuItems = [
    "Student",
    "Parent",
    "Counsellor",
    "Schools",
    "Announcements",
  ];

  return (
    <div className="w-72 h-screen py-7 bg-slate-700 inline-flex flex-col justify-start items-start">
      {/* Dashboard */}
      <div
        className={`self-stretch pl-10 pr-4 py-4 inline-flex justify-start items-center gap-2.5 
                    ${
                      activeItem.category === "Dashboard" ? "bg-amber-500" : ""
                    }`}
        onClick={() => handleItemClick("Dashboard", "")}
      >
        <div
          className={`justify-start text-lg font-[var(--nunito-sans)] 
                    ${
                      activeItem.category === "Dashboard"
                        ? "text-zinc-800"
                        : "text-white"
                    }`}
        >
          Dashboard
        </div>
      </div>

      {/* Learning Modules */}
      <div className="self-stretch flex flex-col justify-start items-start">
        <div
          className={`self-stretch pl-10 pr-4 py-4 inline-flex justify-between items-center cursor-pointer
            ${
              learningModuleItems.includes(activeItem.subItem)
                ? "border-r-4 border-amber-500"
                : ""
            }`}
          onClick={onDropDownClick}
        >
          <div
            className={`justify-start text-lg font-[var(--nunito-sans)] 
                        ${
                          activeItem.category === "Learning Modules"
                            ? "text-amber-500"
                            : "text-white"
                        }`}
          >
            Learning Modules
          </div>
          {isDropDownOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>

        {isDropDownOpen && (
          <div className="self-stretch flex flex-col justify-start items-start">
            {learningModuleItems.map((item) => (
              <div
                key={item}
                className={`self-stretch pl-14 pr-4 py-3 inline-flex justify-start items-center gap-2.5 cursor-pointer
                                    ${
                                      activeItem.subItem === item
                                        ? "bg-amber-500 text-zinc-800"
                                        : "text-white hover:bg-slate-600"
                                    }`}
                onClick={() => handleItemClick("Learning Modules", item)}
              >
                <div className="justify-start text-base font-[var(--nunito-sans)]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {mainMenuItems.map((item) => (
        <div
          key={item}
          className={`self-stretch pl-10 pr-4 py-4 inline-flex justify-start items-center gap-2.5 cursor-pointer
                        ${activeItem.category === item ? "bg-amber-500" : ""}`}
          onClick={() => handleItemClick(item, "")}
        >
          <div
            className={`justify-start text-lg font-[var(--nunito-sans)] 
                        ${
                          activeItem.category === item
                            ? "text-zinc-800"
                            : "text-white"
                        }`}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}
