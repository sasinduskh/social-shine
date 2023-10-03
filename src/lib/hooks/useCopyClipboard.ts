import { useState } from "react";
import { toast } from "sonner";

export function useCopyClipboard() {
  const [coppied, setCopied] = useState<boolean>();

  const copy = (id: string) => {
    const textToCopy = document.getElementById(id)?.textContent;

    if (textToCopy) {
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);

      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setCopied(true);
      toast("Copied to clipboard!");

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  };

  return { coppied, copy };
}
