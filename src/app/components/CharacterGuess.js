import Image from "next/image";

export default function CharacterGuess({character, correct}){
    return(
        <div 
        className={`${correct ? 'bg-green-600' : 'bg-red-500'} flex flex-col p-2 space-y-2 items-center max-w-96 justify-center text-white rounded-sm w-full`}>
            <div className="">
                <Image 
                alt={character.name} width={90} height={90} src={character.image}
                className="w-16 h-16 bg-black rounded shadow-md"
                />
            </div>
            <span className="">{character.name}</span>
        </div>
    );
}