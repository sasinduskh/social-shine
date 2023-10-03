"use client";
import { useState } from "react";
import { PrimaryBtn } from "../button";
import SendIcon from "../icons/send";
import { motion } from "framer-motion";
import axios from "axios";
import { OpenAI } from "openai";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "sonner";
import LoadingCircle from "../icons/loading";
import { useGenerateContent } from "@/lib/hooks/useGenerateContent";
import { useCopyClipboard } from "@/lib/hooks/useCopyClipboard";
interface Types {
  prompt: string;
  ac: string;

  hashtag: boolean;
  emoji: boolean;
}

export default function FormRFC() {
  const [data, setData] = useState<Types>({
    prompt: "",
    ac: "tiktok",

    hashtag: true,
    emoji: true,
  });

  const { create, loading, error, output } = useGenerateContent();
  const { coppied, copy } = useCopyClipboard();

  return (
    <section className="flex flex-col items-center">
      <motion.div
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex md:flex-row md:space-y-0 space-y-[10px] flex-col  md:space-x-[10px] mt-[40px]"
      >
        <PrimaryBtn
          click={() => setData({ ...data, ac: "tiktok" })}
          active={data?.ac == "tiktok" ? true : false}
        >
          TikTok
        </PrimaryBtn>
        <PrimaryBtn
          click={() => setData({ ...data, ac: "facebook" })}
          active={data?.ac == "facebook" ? true : false}
        >
          Facebook
        </PrimaryBtn>
        <PrimaryBtn
          click={() => setData({ ...data, ac: "youtube" })}
          active={data?.ac == "youtube" ? true : false}
        >
          Youtube
        </PrimaryBtn>
        <PrimaryBtn
          click={() => setData({ ...data, ac: "linkedin" })}
          active={data?.ac == "linkedin" ? true : false}
        >
          Linkedin
        </PrimaryBtn>
        <PrimaryBtn
          click={() => setData({ ...data, ac: "twitter" })}
          active={data?.ac == "twitter" ? true : false}
        >
          X
        </PrimaryBtn>
      </motion.div>

      <motion.div
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-[40px] "
      >
        <div className="flex space-x-[10px] mb-[20px]">
          <button
            onClick={() =>
              setData({ ...data, hashtag: data.hashtag ? false : true })
            }
            className={[
              "text-[14px]  px-[10px] py-[4px] rounded-lg",
              data.hashtag ? "bg-black/80 text-white" : "text-black/90",
            ].join(" ")}
          >
            # with hashtag
          </button>
          <button
            onClick={() =>
              setData({ ...data, emoji: data.emoji ? false : true })
            }
            className={[
              "text-[14px]  px-[10px] py-[4px] rounded-lg",
              data.emoji ? "bg-black/80 text-white" : "text-black/90",
            ].join(" ")}
          >
            😀 with emoji
          </button>
        </div>
        <div className="relative flex items-center">
          <textarea
            maxLength={150}
            name=""
            value={data.prompt}
            onChange={(e) => setData({ ...data, prompt: e.target.value })}
            placeholder="Create a beautifull post"
            className="w-full border-[1px] md:max-w-[550px] min-h-[110px] max-h-[110px] md:min-w-[550px] outline-none shadow-xl py-[10px] px-[10px] rounded-xl pr-[40px]"
          ></textarea>
          <button
            onClick={() => create({ ...data })}
            disabled={!data.prompt}
            className="absolute right-[10px] disabled:opacity-20 duration-150 hover:bg-black/10 py-[5px] px-[5px] rounded-lg"
          >
            {loading ? <LoadingCircle /> : <SendIcon className="w-[20px]  " />}
          </button>
        </div>
        {data.prompt && (
          <span className="text-[14px] opacity-50">
            {data.prompt.length}/150
          </span>
        )}
        <div className="text-center text-[14px] mt-[12px]">
          {/* 55.8K photos generated and counting! */}
        </div>
      </motion.div>

      {loading && (
        <motion.p
          initial={{ scale: -4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="my-[20px]"
        >
          This can take between 20s-30s to run.
        </motion.p>
      )}

      {output && (
        <motion.div
          initial={{ translateY: -20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className="max-w-[550px]   bg-white px-[10px] py-[10px] rounded-xl mt-[25px] w-full min-h-[450px]"
        >
          <div className="py-[10px]">
            <motion.button
              onClick={() => copy("content")}
              className="float-right flex items-center"
            >
              <div className="w-[20px] active:scale-125 duration-200">
                <IoCopyOutline />
              </div>
            </motion.button>
          </div>
          <p id="content" dangerouslySetInnerHTML={{ __html: output }} />
        </motion.div>
      )}
    </section>
  );
}
