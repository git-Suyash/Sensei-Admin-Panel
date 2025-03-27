import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Bell from "@/assets/bell.svg";
import User from "@/assets/user.svg";

export default function TopBar() {
  return (
    
      <div className="w-screen h-1/10 px-20 py-3 bg-slate-700 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.65)] inline-flex justify-between items-center">
        <Image src={Logo} alt="sensei logo" />
      
      <div className="flex justify-start items-center gap-6">
        <Image src={ Bell } alt="notifications" />
        <Image src={ User } alt="profile" />
      </div>
      </div>
  );
}
