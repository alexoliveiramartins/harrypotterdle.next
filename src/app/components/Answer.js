import Image from "next/image";

export default function Answer( { correctAnswer } ){
    return(
        <div className="p-4 w-1/2 h-1/2 font-lora flex flex-col space-y-3 items-center w-sm bg-opacity-90 bg-slate-400 rounded">
            <div className="">
                <span>You Won! Today&apos;s character was </span><span className="font-bold">{correctAnswer.name}</span>
            </div>
            <div className="items-center size-fit flex overflow-hidden rounded">
                <Image className="w-72 rounded-lg aspect-square object-cover object-top" alt={correctAnswer.name} width={288} height={288} src={correctAnswer.image}/>
            </div>
        </div>
    );
}
