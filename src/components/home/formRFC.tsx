"use client";
import { useState } from "react";
import { PrimaryBtn } from "../button";
import SendIcon from "../icons/send";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import LoadingCircle from "../icons/loading";
import { useGenerateContent } from "@/lib/hooks/useGenerateContent";
import { useCopyClipboard } from "@/lib/hooks/useCopyClipboard";
import { SocialMediaList } from "@/lib/untils";
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

  const { create, loading, output } = useGenerateContent();
  const { copy } = useCopyClipboard();

  return (
    <section className="flex flex-col items-center">
      <motion.div
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex md:flex-row md:space-y-0 space-y-[10px] flex-col  md:space-x-[10px] mt-[40px]"
      >
        {SocialMediaList.map((_data, i) => (
          <PrimaryBtn
            active={data?.ac == _data.id ? true : false}
            key={i}
            click={() => setData({ ...data, ac: _data.id })}
          >
            {_data.lable}
          </PrimaryBtn>
        ))}
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
            placeholder="I'm posted a image about my family. i want some engage children day with my childs"
            className="w-full border-[1px] md:max-w-[550px] min-h-[110px] max-h-[110px] md:min-w-[550px] outline-none shadow-xl py-[10px] px-[10px] rounded-xl pr-[40px]"
          ></textarea>
          <button
            onClick={() => create({ ...data })}
            disabled={!data.prompt}
            className={[
              "absolute right-[10px] disabled:cursor-not-allowed disabled:opacity-20 duration-150 hover:bg-black/10 py-[5px] px-[5px] rounded-lg",
              loading ? "cursor-not-allowed" : "",
            ].join(" ")}
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

