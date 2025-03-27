import AddSubject from "@/components/AddSubject";
import NotFound from "@/components/NotFound";
import SubjectCard from "@/components/SubjectCard";
import SubmoduleTopBar from "@/components/SubmoduleTopBar";


const Subjects = [{
  name: "Emotional Well-Being",
  ageGroup: "5-10 years",
  timeDuration: "3 M",
  subjectId: "00",
  activities: "00",
},
{
  name: "Emotional Well-Being",
  ageGroup: "5-10 years",
  timeDuration: "3 M",
  subjectId: "00",
  activities: "00",
},
{
  name: "Emotional Well-Being",
  ageGroup: "5-10 years",
  timeDuration: "3 M",
  subjectId: "00",
  activities: "00",
},
{
  name: "Emotional Well-Being",
  ageGroup: "5-10 years",
  timeDuration: "3 M",
  subjectId: "00",
  activities: "00",
}
]

export default function Home() {
  return (
    <>
    <SubmoduleTopBar moduleTitle="Subjects" />
    <div className="m-4">
    {/* <SubjectCard subjects = { Subjects }  /> */}
    <AddSubject />
    </div>
    {/* < NotFound moduleTitle="Modules" /> */}
    </>
  );
}
