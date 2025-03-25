"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import dropDown from "@/assets/dropdown.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Sub-modules for Learning Modules
  const learningModules = [
    { name: "Subjects", path: "/admin/curriculum" },
    { name: "Modules", path: "/learning-modules/modules" },
    { name: "Sub-Modules", path: "/learning-modules/sub-modules" },
    { name: "Interactive Activities", path: "/learning-modules/interactive-activities" },
    { name: "Digital Activities", path: "/learning-modules/digital-activities" },
    { name: "Feedback", path: "/learning-modules/feedback" },
  ];

  // Main menu items
  const menuItems = [
    { name: "Student", path: "/admin/student" },
    { name: "Parent", path: "/admin/parents" },
    { name: "Counsellor", path: "/admin/counsellor" },
    { name: "Schools", path: "/admin/schools" },
    { name: "Announcements", path: "/admin/announcements" },
  ];

  // Check if any submodule is active
  const isAnySubModuleActive = learningModules.some((module) => pathname === module.path);

  return (
    <div className="w-64 h-[90vh] bg-[#1E3356] text-white p-4">
      <ul className="space-y-2">
        {/* Learning Modules - Dropdown */}
        <li>
          <button
            className={`w-full flex items-center justify-between p-2 rounded ${isAnySubModuleActive ? "bg-orange-500 text-white" : "text-white"}`}
            onClick={() => setOpen(!open)}
          >
            Learning Modules
            <Image 
              src={dropDown} 
              className={`transition-transform ${open ? "rotate-180" : ""}`} 
              alt="Dropdown Icon" 
              width={20} 
              height={20} 
            />
          </button>
          {open && (
            <ul className="ml-4 space-y-1 mt-1">
              {learningModules.map((module) => (
                <li
                  key={module.path}
                  className={`p-2 cursor-pointer rounded ${pathname === module.path ? "bg-orange-500 text-white" : "text-orange-300"}`}
                  onClick={() => router.push(module.path)}
                >
                  {module.name}
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Other Main Sections */}
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`p-2 cursor-pointer rounded ${pathname === item.path ? "bg-orange-500 text-white" : "text-white"}`}
            onClick={() => router.push(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;