import { useState, useEffect } from "react";
import characterData from '../assets/characterData.json';

export default function InputBox({ correctAnswer, guessesState, setGuesses, setIsPlaying }){
    const [inputValue, setInputValue] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);
    const [characters, setCharacters] = useState(characterData);

    console.log("correct answer on inputbox: ", correctAnswer);

    useEffect(() => {
        const filtered = characters.filter(character =>
            character.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            (character.alias && character.alias.toLowerCase().includes(inputValue.toLowerCase()))
        )
        setFilteredNames(filtered);
        // console.log(filteredNames);
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

    return (
        <div className="w-full">
            <div className="relative">
                <input 
                    className="w-full text-sm p-3 rounded border border-neutral-500"
                    type="text"
                    placeholder="Character name, alias"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {inputValue.length > 0 && 
                    <ul className="overflow-y-scroll max-h-screen left-0 right-0 bg-slate-200 z-20 absolute">
                        {filteredNames.map((character, index) => (
                            <li 
                                onClick={() => handleClick(character.name)}
                                key={index}
                                className="p-2 flex flex-row items-center space-x-2 hover:bg-slate-300 cursor-pointer"
                            >
                                <img src={character.image} className=" rounded-md w-11 h-11" alt={character.name}></img>
                                <div className="space-x-2">
                                    <span className="text-sm">{character.name}</span>
                                    {character.alias != "" && <span className="text-xs opacity-45">{`aka.: ${character.alias}`}</span>}
                                </div>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
}