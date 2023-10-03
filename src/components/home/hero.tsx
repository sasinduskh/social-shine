"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import XIcon from "../icons/x";
export default function Hero() {
  return (
    <section className="flex justify-center mt-[120px]">
      <motion.div
        initial={{ translateY: 180, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className="text-center"
      >
        <div className="flex justify-center">
          <Link href="" target="_blank">
            <div className="bg-black/60 hover:bg-black/90 duration-300 text-white px-[20px] py-[10px] rounded-full flex items-center space-x-[10px]">
              <XIcon />
              <span>Hey this is socialshine</span>
            </div>
          </Link>
        </div>
        <h1 className="md:text-[72px] text-[30px] font-mainFont">
          SocialShine
        </h1>
        <p className="md:text-[22px]">
          Create a beautiful content for your social media with AI. Powered by{" "}
          <Link href="https://openai.com/" target="_blank" className="underline">
            Openai
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
