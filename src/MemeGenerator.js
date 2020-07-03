import React, { useState, useEffect } from "react";
import { Input } from "./Input.js";
import { Display } from "./Display.js";

export const MemeGenerator = () => {
  const [input, setInput] = useState({ top: "", buttom: "" });
  const [meme, setMeme] = useState([
    { url: "https://i.imgflip.com/1g8my4.jpg" },
    { url: "https://i.imgflip.com/1g8my4.jpg" },
  ]);

  const textInput = (topText, buttomText) => {
    setInput({ top: topText, buttom: buttomText });
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((result) => result.json())
      .catch(() =>
        setMeme([
          { url: "https://i.imgflip.com/1g8my4.jpg" },
          { url: "https://i.imgflip.com/1g8my4.jpg" },
        ])
      )
      .then((result) => setMeme(result.data.memes));
  }, []);
  return (
    <div>
      <Input textInput={textInput} />
      <Display
        input={input}
        meme={meme[Math.round(Math.random() * meme.length)].url}
      />
    </div>
  );
};
