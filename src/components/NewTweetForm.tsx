
import React from "react";
import Button from "./Button";
import { getServerAuthSession } from "~/server/auth";
import ProfileImage from "./ProfileImage";
import { useState } from "react";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

async function NewTweetForm() {
  const session = await getServerAuthSession();
  const [inputValue, setInputValue] = useState("");
  if (!session) return;
  return (
    <div>
      <form className="flex flex-col gap-2 border-b px-4 py-2">
        <div className="flex gap-4">
          <ProfileImage src={session?.user.image} />
          <textarea
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
