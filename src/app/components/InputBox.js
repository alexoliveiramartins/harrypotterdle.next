import { useState, useEffect } from "react";
import characterData from '../assets/characterData.json';
import Image from "next/image";

export default function InputBox({ correctAnswer, guessesState, setGuesses, setIsPlaying }){
    const [inputValue, setInputValue] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);
    const [characters, setCharacters] = useState(characterData);
    const [selectedIndex, setSelectedIndex] = useState(null);

    // console.log("correct answer on inputbox: ", correctAnswer);

    useEffect(() => {
        const savedGuessNames = JSON.parse(localStorage.getItem('guesses') || '[]');
    
        const remainingCharacters = characters.filter(character => 
            !savedGuessNames.includes(character.name)
        );
        setCharacters(remainingCharacters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const filtered = characters.filter(character =>
            character.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            (character.alias && character.alias.toLowerCase().includes(inputValue.toLowerCase()))
        )
        setFilteredNames(filtered);
        // console.log(filteredNames);
        setSelectedIndex(0);
    }, [inputValue, characters]);

    useEffect(() => {

    }, [guessesState])

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = (characterName) => {
        const selectedCharacter = characters.find(character => character.name === characterName)
        setGuesses(prevGuesses => [selectedCharacter, ...prevGuesses]);
        const newCharacters = characters.filter(character =>
            character.name.toLowerCase() !== characterName.toLowerCase()
        );
        setCharacters(newCharacters);
        setInputValue('');
        if(characterName === correctAnswer.name) setIsPlaying(false);
        // console.log(newCharacters);
        // console.log("guesses: ", guessesState);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter' && filteredNames.length > 0) {
            handleClick(filteredNames[selectedIndex].name);
        } else if (e.key === 'ArrowDown') {
            setSelectedIndex(prevIndex => 
                prevIndex < filteredNames.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : 0);
        }
    }

    return (
        <div className="font-lora w-full max-w-96 rounded-md bg-gray-800 p-3">
            <div className="relative flex flex-row space-x-2 items-center">
                <div className="w-full">
                    <input 
                        className="bg-gray-600 w-full text-sm p-3 rounded border border-neutral-500"
                        type="text"
                        placeholder="Character name, alias"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleEnter}
                    />
                    {inputValue.length > 0 && 
                        <ul className="font-light overflow-y-scroll max-h-screen left-0 right-0 bg-slate-200 z-20 absolute">
                            {filteredNames.map((character, index) => (
                                <li 
                                    onClick={() => handleClick(character.name)}
                                    key={`${character.id}-${index}`}
                                    className={`${index === selectedIndex ? 'bg-slate-300' : 'hover:bg-slate-100'} p-2 flex flex-row items-center space-x-2 cursor-pointer`}
                                    onMouseEnter={() => setSelectedIndex(index)}
                                >
                                    <Image src={character.image} className=" rounded-md w-11 h-11" alt={character.name}></Image>
                                    <div className="space-x-2">
                                        <span className="text-sm">{character.name}</span>
                                        {character.alias != "" && <span className="text-xs opacity-45">{`aka.: ${character.alias}`}</span>}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <Image 
                width={32}
                height={32}
                src="svg/send.svg"
                className="w-8 h-8 hover:cursor-pointer"
                onClick={() => {
                    if (inputValue !== '' && filteredNames.length > 0) {
                        handleClick(filteredNames[selectedIndex].name);
                }
                }} />
            </div>
        </div>
    );
}