"use client";

import Image from "next/image";
import InputBox from "./components/InputBox";
import Attribute from "./components/Attribute";
import AttributeRow from "./components/AttributeRow";
import react from "react";
import characterData from "./assets/characterData";
import { useEffect, useState} from 'react';
import AttributeTitles from "./components/AttributeTitles";

export default function Home() {
  const [guesses, setGuesses] = useState([]);
  const [date, setDate] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDate = localStorage.getItem('date');
      const today = new Date();
      today.setDate(today.getDate());
      const todayString = today.getDate().toString();
      
      if (storedDate !== todayString) {
        localStorage.removeItem('guesses');
        localStorage.setItem('date', todayString);
        setDate(todayString);
      } else {
        setDate(storedDate);
      }
      const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
      const randomIndex = seed % characterData.length;
      setCorrectAnswer(characterData[randomIndex]);
    }
  }, []);

  useEffect(() => {
    console.log("guesses: ", guesses);
  }, [guesses])

  console.log(correctAnswer);

  return (
    <div className="w-screen h-screen bg-cover overflow-y-auto" style={{ backgroundImage: `url(${'images/Wallpaper.webp'})` }}>
      <div className="flex flex-col mx-auto items-center py-11 space-y-8 max-w-4xl px-4">
        <h1 className="font-harry text-white text-6xl">HarryPotter.dle</h1>
        
        {/* winning card */}
        {!isPlaying &&
          <div className="flex flex-col space-y-3 items-center p-5 w-sm bg-opacity-50 bg-slate-400 rounded">
            <div>
              <span>You Won! Today's character was </span><span className="font-medium">{correctAnswer.name}</span>
            </div>
            <div className="items-center size-fit flex overflow-hidden rounded">
              <img className="rounded-lg aspect-square object-cover object-top" src={correctAnswer.image}/>
            </div>
          </div>
        }

        {isPlaying && correctAnswer && <InputBox correctAnswer={correctAnswer} setIsPlaying={setIsPlaying} guessesState={guesses} setGuesses={setGuesses} className="px-4"/>}
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto w-full flex"> 
            <div className="inline-block space-y-6">
              <AttributeTitles />
              <div className="space-y-5">
                {guesses.map((guesses, index) => {
                  return <AttributeRow character={guesses} correctAnswer={correctAnswer} key={index} setPlaying={setIsPlaying}></AttributeRow>
                })}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
