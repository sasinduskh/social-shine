import FormRFC from "@/components/home/formRFC";
import Hero from "@/components/home/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socialshine",
  description:
    "SocialShine is an open-source AI-powered application designed to simplify the process of generating engaging and creative social media content. It leverages advanced natural language processing and image generation techniques to help users create captivating posts for various social media platforms effortlessly.",
  creator: "Sasindu Kavinda",
  metadataBase: new URL("https://socialshine.vercel.app"),
};

export default function Home() {
  return (
    <>
      <Hero />
      <FormRFC />
    </>
  );
}
