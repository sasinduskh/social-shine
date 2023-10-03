"use client";

import Link from "next/link";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="flex justify-center mt-[120px]">
      <motion.div
        initial={{ translateY: 180, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className="text-center"
      >
        <h1 className="md:text-[72px] text-[30px] font-mainFont">
          SocialShine
        </h1>
        <p className="md:text-[22px]">
          Create a beautiful content for your social media with AI. Powered by{" "}
          <Link href="" target="_blank" className="underline">
            Openai
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
