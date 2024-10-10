import Link from "next/link";


export default function(){
    return(
        <div className="rounded
        max-w-96 w-full h-1/2 p-5
        min-w-max flex flex-col space-y-2 font-lora"
        >
            <Link href="/classic">
                <div className="transform transition-transform duration-500 hover:cursor-pointer hover:scale-105 flex flex-row items-center space-x-3 p-2 rounded-sm overflow-auto bg-slate-400">
                    <div className="border-2 border-zinc-700 w-20 h-20 bg-contain bg-no-repeat bg-top bg-white rounded-full"
                    style={{ backgroundImage: `url('/svg/deathlyHallows.svg')`, backgroundSize: '89%' }}/>
                    <div className="flex flex-col space-y-0">   
                        <label className="text-2xl text-white">Classic</label>
                        <label className="text-1xl text-gray-700">Guess the character!</label>
                    </div>
                </div>
            </Link>
            <Link href="/classic">
                <div className="transform transition-transform duration-500 hover:cursor-pointer hover:scale-105 flex flex-row items-center space-x-3 p-2 rounded-sm overflow-auto bg-slate-400">
                    <div className="border-2 border-zinc-700 w-20 h-20 bg-contain bg-no-repeat bg-center bg-white rounded-full" style={{ backgroundImage: `url('/svg/speech.svg')`, backgroundSize: '80%' }}/>
                    <div className="flex flex-col space-y-0">   
                        <label className="text-2xl text-white">Quote</label>
                        <label className="text-1xl text-gray-700">Can you tell who said this quote?</label>
                    </div>
                </div>
            </Link>
        </div>
    );  
}
