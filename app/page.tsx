"use client";
import TextDelay from "@/src/components/Text";
import TeaImage from "@/public/images/sen-tea.jpeg";
import Sorry1 from "@/public/images/sorry1.gif";
import Sorry2 from "@/public/images/sorry2.gif";

import { useRef, useState } from "react";
export default function Home() {
  const audioRef = useRef<any>(null);
  const [isResetText, setIsResetText] = useState(false);
  const text = [
    {
      delay: "0",
      value: "Em ưi~",
      imgStatic: Sorry1,
    },
    {
      delay: "2",
      value: "~~~Em ới ời ơiiiiiiiiiiiii",
      // img: "https://gifdb.com/images/high/sorry-cute-bow-zf6lzgw5xzoji3w5.gif",
    },
    {
      delay: "5",
      value: "Anh xin lũi moàaaaaaaaaaaaaaaaa",
      imgStatic: Sorry2,
    },
    {
      delay: "8",
      value: "Cho em nèeeeeeeeee",
      imgStatic: TeaImage,
      extendDelayFunc: () => {
        window.scrollTo({
          left: 0,
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        setTimeout(() => {
          setIsResetText(true);
          setTimeout(() => {
            setIsResetText(false);
          }, 0.1 * 1000);
        }, 5 * 1000);
      },
    },
  ];

  const playAudio = () => {
    if (audioRef) {
      audioRef.current.currentTime = 46.5;
      audioRef.current.play();
    }
  };

  return (
    <main className="flex min-h-screen overflow-auto flex-col items-center gap-2 p-2 bg-pink-500">
      <audio ref={audioRef} loop>
        <source src="/missingyou.mp3" type="audio/mpeg" />
      </audio>
      <button
        className="bg-white rounded p-1 animate-wiggle"
        onClick={playAudio}
      >
        {"> Bấm vào đây nghe nhạc nè <"}
      </button>
      {!isResetText &&
        text.map((elem) => <TextDelay {...elem} key={elem.value} />)}
    </main>
  );
}
