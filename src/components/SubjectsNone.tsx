import subjectNone from "@/assets/subjectsNone.svg";
import Image from "next/image";
import SubjectTopBar from "./ui/AddSubjectBar";

export default function SubjectsNone() {
  return (
      <div>
      <SubjectTopBar />
      <main className="flex flex-col justify-between p-4 ">
        <div className="flex flex-col items-center justify-center h-[70vh]">
        <Image src={subjectNone} alt="No Subjects" className="h-full" />
        </div>
    </main>
    </div>
  );
}
