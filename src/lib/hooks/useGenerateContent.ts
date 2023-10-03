import { useState } from "react";
import { OpenAI } from "openai";
import { toast } from "sonner";

export function useGenerateContent() {
  // Loading
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [output, setOutput] = useState<string | null>(null);

  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: process.env.OPENAI_API_KEY || "", // defaults to process.env["OPENAI_API_KEY"]
  });

  const create = async function (props: Types) {
    setLoading(true);
    toast.success("Your content is being processed.....");
    const chatCompletion: any = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `"Create a small post content for ${props.prompt}, about ${
            props.prompt
          }. ${props.hashtag ? "with hashtags" : "without hashtags"}. ${
            props.emoji ? "with emoji" : "without emoji"
          }. add <br/> <br/> for line break and Maximum words = 25"`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    setOutput(chatCompletion.choices[0].message.content);
    setLoading(false);
  };

  return { create, loading, error, output };
}

interface Types {
  prompt: string;
  ac: string;

  hashtag: boolean;
  emoji: boolean;
}
