"use client";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { useState, useRef, useCallback, useLayoutEffect } from "react";
import { useSession } from "next-auth/react";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

function NewTweetForm() {
  const { data: session } = useSession();

  //for textbox
  const [inputValue, setInputValue] = useState("");

  //get the current text are and update
  const textAreaRef = useRef<HTMLTextAreaElement>();

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [inputValue]);

  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  //is session not there no need to render
  if (!session) return;

  return (
    <div>
      <form className="flex flex-col gap-2 border-b px-4 py-2">
        <div className="flex gap-4">
          <ProfileImage src={session?.user.image} />
          <textarea
            ref={inputRef}
            style={{ height: 0 }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="whats happening?"
            className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
          />
        </div>
        <Button className="self-end">Tweet</Button>
      </form>
    </div>
  );
}

export default NewTweetForm;
