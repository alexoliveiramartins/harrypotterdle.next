import Attribute from "./Attribute";
import { useEffect } from "react";

export default function AttributeRow( {character, correctAnswer, setPlaying} ){
    
    // console.log("correct answer: ", correctAnswer);
    // console.log("character: ", character);

    const matchName = character.name === correctAnswer.name;
    const matchSpecies = character.species === correctAnswer.species;
    const matchHouse = character.house === correctAnswer.house;
    const matchPatronus = character.patronus === correctAnswer.patronus;
    const matchGender = character.gender === correctAnswer.gender;
    const matchAppearance = character.first_appearance === correctAnswer.first_appearance;
    const matchBorn = character.born === correctAnswer.born;
    const matchBlood = character.blood === correctAnswer.blood;
    const matchBoggart = character.boggart === correctAnswer.boggart;
    
    // console.log("match gender: ", matchGender);

    useEffect(() => {
        if (matchAppearance && matchBlood && matchBoggart && matchBorn && 
            matchGender && matchHouse && matchName && matchPatronus && matchSpecies) {
            setPlaying(false);
        }
    }, [
        matchAppearance,
        matchBlood,
        matchBoggart,
        matchBorn,
        matchGender,
        matchHouse,
        matchName,
        matchPatronus,
        matchSpecies,
        setPlaying
    ]);

    const getBornImage = () => {
        if(matchBorn) return "";
        const bornYear = parseInt(character.born);
        const correctYear = parseInt(correctAnswer.born);
        if(isNaN(bornYear) || isNaN(correctYear)) return "";
        return bornYear > correctYear ? "svg/down-arrow.svg" : "svg/up-arrow.svg";
    }

    const getHouseImage = () => {
        if(character.house === "Gryffindor") return 'images/houses/Gryffindor.webp';
        if(character.house === "Slytherin") return 'images/houses/Slytherin.webp';
        if(character.house === "Ravenclaw") return 'images/houses/Ravenclaw.webp';
        if(character.house === "Hufflepuff") return 'images/houses/Hufflepuff.webp';
    }

    const getBookImage = () => {
        if(character.first_appearance === "Philosopher's Stone") return 'images/books/1.webp';
        if(character.first_appearance === "Chamber of Secrets") return 'images/books/2.webp';
        if(character.first_appearance === "Prisoner of Azkaban") return 'images/books/3.webp';
        if(character.first_appearance === "Goblet of Fire") return 'images/books/4.webp';
        if(character.first_appearance === "Order of the Phoenix") return 'images/books/5.webp';
        if(character.first_appearance === "Half-Blood Prince") return 'images/books/6.webp';
        if(character.first_appearance === "Deathly Hallows") return 'images/books/7.webp';
        if(character.first_appearance === "Fantastic Beasts") return 'images/books/FB.webp';
    }
    
    return(
        <div className="px-2 grid grid-cols-9 gap-4 w-full justify-evenly min-w-max">
            <Attribute name={character.name} character={true} image={character.image} correct={matchName} bgSize={"bg-cover"}/>
            <Attribute name={character.gender} correct={matchGender}/>
            <Attribute name={character.boggart} correct={matchBoggart}/>
            <Attribute name={character.blood} correct={matchBlood}/>
            <Attribute name={character.born} correct={matchBorn} image={getBornImage()}/>
            <Attribute name={character.house} correct={matchHouse} image={getHouseImage()}/>
            <Attribute name={character.species} correct={matchSpecies}/>
            <Attribute name={character.patronus} correct={matchPatronus}/>
            <Attribute name={character.first_appearance} correct={matchAppearance} opacity={"opacity-60"} image={getBookImage()} />
        </div>
    );
}