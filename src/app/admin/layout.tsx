import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6 bg-white">
                    {children}
                </main>
            </div>
        </div>
    );
}
