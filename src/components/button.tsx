"use client";
import Link from "next/link";
import { FC } from "react";
import { useSearchParams } from "next/navigation";

export const PrimaryBtn: FC<Types> = (props) => {
  return (
    <button
      onClick={props.click}
      className={[
        "px-[30px] py-[5px] min-w-[120px] rounded-full hover:bg-black hover:text-white duration-300",
        props.active ? "bg-black text-white" : "border-[1px] border-black",
      ].join(" ")}
    >
      {props.children}
    </button>
  );
};

interface Types {
  children: string;
  className?: string;
  active?: boolean;
  click: () => void;
}
