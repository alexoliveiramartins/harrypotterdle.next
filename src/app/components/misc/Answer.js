import Image from "next/image";
import Countdown from "./Countdown.js";

export default function Answer( { correctAnswer } ){
    return(
        <div className="text-white p-4 w-1/2 h-1/2 font-lora flex flex-col space-y-3 items-center w-sm bg-opacity-90 bg-slate-700 rounded">
            <div className="">
                <span>You Won! Today&apos;s character was </span><span className="font-bold">{correctAnswer.name}</span>
            </div>
            <div className="items-center size-fit flex overflow-hidden rounded">
                <Image className="w-72 rounded-lg aspect-square object-cover object-top" alt={correctAnswer.name} width={288} height={288} src={correctAnswer.image}/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <label>Next character in:</label>
                <Countdown></Countdown>
            </div>
        </div>
    );
}
