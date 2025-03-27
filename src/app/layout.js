import TopBar from "@/components/TopBar";
import "./globals.css";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "Sensei Admin Panel",
  description: "Admin CMS for sensei.org",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-col overflow-hidden">
        <TopBar />
        <div className="flex"> {/* Added top padding to account for topbar */}
          <SideBar/>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}