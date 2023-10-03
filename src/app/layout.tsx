"use client";
import Link from "next/link";
import "./globals.css";
import { Bebas_Neue, Young_Serif } from "next/font/google";
import Logo from "@/components/icons/logo";
import { BsGithub } from "react-icons/bs";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { CONFIG } from "@/lib/untils";
const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

const youngserif = Young_Serif({
  subsets: ["latin"],
  variable: "--font-youngserif",
  weight: "400",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={youngserif.variable}>
        <Toaster position="top-center" />
        <div className="flex flex-col min-h-screen margin-x padding-x">
          <header className="z-[20] sticky top-0 pt-[20px] backdrop-blur-md h-full py-[20px] flex justify-between">
            <div className="w-[40px]">
              <Link href="/">
                <div className="flex md:space-x-[10px] items-center">
                  <div>
                    <Logo className="md:w-[40px] w-[25px]" />
                  </div>
                  <span className="uppercase md:text-[24px] text-[14px] font-bold">
                    socialshine
                  </span>
                </div>
              </Link>
            </div>
            <div>
              <Link href={CONFIG.sourceCode} target="_blank">
                <div className=" flex items-center space-x-[5px]">
                  <BsGithub /> <span>Source Code</span>
                </div>
              </Link>
            </div>
          </header>
          <main className="flex-grow  w-full font-Nunito">{children}</main>

          <footer className="my-[55px] flex justify-center ">
            <motion.div
              initial={{ opacity: 0, translateY: 200 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.4 }}
            >
              {" "}
              <span className="md:text-[18px]">
                A project by{" "}
                <Link
                  className="font-bold"
                  href={CONFIG.xUrl}
                  target="_blank"
                >
                  Sasindu Kavinda
                </Link>
              </span>
            </motion.div>
          </footer>
        </div>
      </body>
    </html>
  );
}
