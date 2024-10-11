"use client";

import Link from 'next/link';
import quoteData from "../assets/quotes.json";
import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import MadeBy from '../components/Madeby';
import QuoteInput from '../components/QuoteInput';
import CharacterGuess from '../components/CharacterGuess';
import QuoteCard from '../components/QuoteCard';
import Answer from '../components/Answer';

export default function Quote(){
    const [guesses, setGuesses] = useState([]);
    const [date, setDate] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [characters, setCharacters] = useState(quoteData);

    useEffect(() => {
        // console.log("not playing");
    }, [isPlaying]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedDate = localStorage.getItem('date');
            const today = new Date();
            today.setDate(today.getDate());
            const todayString = today.getDate().toString();
            
            if (storedDate !== todayString) {
                localStorage.removeItem('guessesQuote');
                localStorage.setItem('date', todayString);
                setDate(todayString);
            } else {
                setDate(storedDate);
            }
            const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
            const randomIndex = seed % quoteData.length;
            setCorrectAnswer(quoteData[randomIndex]);
            
            if(localStorage.getItem('guessesQuote') === null){
                localStorage.setItem('guessesQuote', '')
            }
            else{
                const savedGuessesLocal = JSON.parse(localStorage.getItem('guessesQuote') || '[]');
                const savedGuesses = savedGuessesLocal.map(name => 
                    characters.find(character => character.name === name)
                ).filter(Boolean);
                setGuesses(savedGuesses);
                
                const remainingCharacters = characters.filter(character => 
                    !savedGuessesLocal.includes(character.name)
                );
                setCharacters(remainingCharacters);
                // console.log("remaining characters: ", remainingCharacters);
            }
        console.log(correctAnswer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
    if (typeof window !== "undefined"){
        if(guesses.length > 0){
        const guessesNames = guesses.map(guess => guess.name)
        localStorage.setItem('guessesQuote', JSON.stringify(guessesNames));
        // console.log(guessesNames);
        }
    }
    }, [guesses])

    console.log("correct answer: ", correctAnswer);
    {correctAnswer && console.log("correct answer.name: ", correctAnswer.name)};
   
    return (
    <div className="w-screen h-screen bg-cover overflow-y-auto py-9" style={{ backgroundImage: `url(${'images/Wallpaper.webp'})` }}>
        <div className="flex flex-col mx-auto items-center space-y-3 max-w-4xl px-4">
            <Logo/>
            
            {!isPlaying && <Answer correctAnswer={correctAnswer} />}
            {correctAnswer && <QuoteCard quote={correctAnswer.quote}></QuoteCard>}
            {isPlaying && correctAnswer && 
            <QuoteInput correctAnswer={correctAnswer} setIsPlaying={setIsPlaying} guessesState={guesses} setGuesses={setGuesses}></QuoteInput>}
            {guesses.map((character, index) => {
                return <CharacterGuess setIsPlaying={setIsPlaying} guessesState={guesses} key={index} character={character} correct={character.name === correctAnswer.name}></CharacterGuess>
            })}

            {/* <CharacterGuess title={"Harry Potter"} correct={true}></CharacterGuess> */}
        </div>
        <MadeBy />
    </div>
    );
}