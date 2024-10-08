import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal K. Shaw",
  description: "Kunal Kumar Shaw",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full  lg:h-screen  lg:pt-20 relative  overflow-x-hidden overflow-visible`}>
      <div className=" z-10 max-w-[1244px] mx-auto">
        <div className="flex flex-col lg:flex-row w-full  gap-10  px-3  py-5  mx-auto lg:!min-h-[80%] mb-20 lg:mb-0">
          <div className="sticky top-2 lg:w-[90%] flex-1 w-full bg-eerie-black-2 lg:max-w-[350px] rounded-xl h-fit  z-50">
            <Sidebar />
          </div>
          <div className="flex-1 lg:flex-2  bg-eerie-black-2  rounded-xl border-purple  z-50 overflow-hidden  ">
            <div className="hidden lg:block relative">
              <Navbar />
            </div>
            {children}
          </div>
        </div>
        <div className="block lg:hidden">
          <Navbar />
        </div>
        </div>
        <div className="absolute right-[100px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 blur-[150px] top-[-150px]" ></div>
        <div className="fixed right-[100px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-slate-800 via-violet-600 to-zinc-400 blur-[50px] top-[-150px]" ></div>
        <div className="fixed dotted-background h-full top-0 left-0 right-0 "><div className="absolute left-0 right-0 bottom-0 h-[300px]"></div></div>
      </body>
    </html>
  );
}
