"use client";

import Link from 'next/link';
import Image from "next/image";
import InputBox from "../components/InputBox";
import Attribute from "../components/Attribute";
import AttributeRow from "../components/AttributeRow";
import react from "react";
import characterData from "../assets/characterData";
import { useEffect, useState } from 'react';
import AttributeTitles from "../components/AttributeTitles";
import Answer from "../components/answer";
import HowToPlay from "../components/HowToPlay";

export default function Classic(){
    const [guesses, setGuesses] = useState([]);
    const [date, setDate] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [characters, setCharacters] = useState(characterData);

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
        
        if(localStorage.getItem('guesses') === null){
        localStorage.setItem('guesses', '')
        }
        else{
        const savedGuessesLocal = JSON.parse(localStorage.getItem('guesses') || '[]');
        const savedGuesses = savedGuessesLocal.map(name => 
            characters.find(character => character.name === name)
        ).filter(Boolean);
        
        setGuesses(savedGuesses);

        const remainingCharacters = characters.filter(character => 
            !savedGuessesLocal.includes(character.name)
        );
        setCharacters(remainingCharacters);
        }

    }

    }, []);

    useEffect(() => {
    if (typeof window !== "undefined"){
        if(guesses.length > 0){
        const guessesNames = guesses.map(guess => guess.name)
        localStorage.setItem('guesses', JSON.stringify(guessesNames));
        console.log(guessesNames);
        }
    }
    }, [guesses])

    console.log(correctAnswer);

    return (
    <div className="w-screen h-screen bg-cover overflow-y-auto py-9" style={{ backgroundImage: `url(${'images/Wallpaper.webp'})` }}>
        <div className="flex flex-col mx-auto items-center space-y-7 max-w-4xl px-4">
            <Link onCick={console.log("A")} href="/" passHref legacyBehavior>
                <a className="transform transition-transform duration-500 hover:cursor-pointer hover:scale-110 font-harry text-white text-7xl">
                HarryPotter.dle
                </a>
            </Link>

            
            {/* winning card */}
            {!isPlaying && <Answer correctAnswer={correctAnswer}/>}
            <div className="w-full items-center flex flex-col space-y-3">
                {isPlaying && <HowToPlay></HowToPlay>}
                {isPlaying && correctAnswer && <InputBox correctAnswer={correctAnswer} setIsPlaying={setIsPlaying} guessesState={guesses} setGuesses={setGuesses} className="px-4"/>}
            </div>
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
            <div 
            className="py-8 opacity-75 min-w-max flex font-light flex-row items-center space-x-1 justify-center text-gray-50">
            <footer>made by
            </footer>
            <a 
                href="https://github.com/alexoliveiramartins" 
                className="font-semibold decoration-dotted underline">
                alex
            </a>
        </div>
    </div>

    );
}