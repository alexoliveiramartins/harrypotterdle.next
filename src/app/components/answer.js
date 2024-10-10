
export default function Answer( { correctAnswer } ){
    return(
        <div className="w-1/2 h-1/2 font-lora flex flex-col space-y-3 items-center w-sm bg-opacity-90 bg-slate-400 rounded">
            <div className="">
                <span>You Won! Today&apos;s character was </span><span className="font-bold">{correctAnswer.name}</span>
            </div>
            <div className="items-center size-fit flex overflow-hidden rounded">
                <img className="w-72 rounded-lg aspect-square object-cover object-top" src={correctAnswer.image}/>
            </div>
        </div>
    );
}
