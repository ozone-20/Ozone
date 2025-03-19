import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import HeaderMobile from "@/components/header-mobile";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={``}
        >
          <div className={`grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-2 h-screen`}>
            <Header />
            <Sidebar />
            <div className={`bg-black rounded-3xl col-span-full md:col-auto p-2`}>
              {children}
            </div>
            <HeaderMobile />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
