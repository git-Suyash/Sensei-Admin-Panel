import Image from "next/image";
import logo from "@/assets/logo.svg";
import bellIcon from "@/assets/bell.svg";
import userIcon from "@/assets/user.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#1E3356] h-22 flex items-center justify-between px-14 py-4">
      <div className="flex items-center">
        <Link href="/admin/curriculum">
        <Image src={logo} alt="Sensei Logo" width={120} height={50} />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Image src={bellIcon} alt="Notifications" width={28} height={28} />
        <Image src={userIcon} alt="User Profile" width={36} height={36} className="rounded-full" />
      </div>
    </header>
  );
}


