import SubjectForm from "@/components/AddSubject";
// import SubjectsNone from "@/components/SubjectsNone";

// async function fetchSubjects(){
//     const res = await fetch('http://localhost:3000/api/subjects');
//     const json = await res.json();
//     return json;
// }

export default function Page() {
    // fetchSubjects().then(() => {})
    
    return (
        <div>
         <SubjectForm /> 
            {/* <SubjectsNone /> */}
        </div>
    )
}