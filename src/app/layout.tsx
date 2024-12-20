import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/sidebar/sidebar";



export const metadata: Metadata = {
  title: "leads-generation",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
          <div className="flex">
            <Sidebar />
            <div className="w-full">
              <div className="p-5">{children}</div>
            </div>
          </div>
        </body>
   </html>
  );
}
