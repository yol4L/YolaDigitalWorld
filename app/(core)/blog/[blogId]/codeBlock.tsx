/**
 * The CodeBlock Component is defined in this separate file
 * due to the 'react-code-block' package's reliance on the 'createContext' API.
 * This necessitates the use of the 'use Client' for proper functionality.
 */

"use client";

import { BlogBlock } from "@/app/types";
import { CopyBlock, dracula, obsidian } from "react-code-blocks";

type CodeProps = Extract<BlogBlock, { category: "code" }>["attributes"];

export const CodeBlock: React.FC<{
  content: CodeProps["content"];
  language: CodeProps["language"];
}> = ({ content, language }) => {
  return (
    <div className="my-4 text-sm sm:text-base">
      <CopyBlock
        text={content}
        language={language}
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};
