import Link from "next/link";

export default function Menu(){
    return(
        <div className="rounded
        max-w-96 w-full h-1/2 p-5
        flex flex-col space-y-2 font-lora px-2"
        >
            <Link className="" href="/classic">
                <div className="transform transition-transform duration-500 hover:scale-105 flex flex-row items-center space-x-3 p-2 rounded-sm overflow-auto bg-slate-400">
                    <div className="shrink-0 border-2 border-zinc-700 w-20 h-20 bg-contain bg-no-repeat bg-top bg-white rounded-full"
                    style={{ backgroundImage: `url('/svg/deathlyHallows.svg')`, backgroundSize: '89%' }}/>
                    <div className="flex flex-col space-y-0">   
                        <label className="hover:cursor-pointer text-2xl text-white">Classic</label>
                        <label className="hover:cursor-pointer text-1xl text-gray-700">Guess the character!</label>
                    </div>
                </div>
            </Link>
            <Link className="" href="/quote">
                <div className="transform transition-transform duration-500 hover:scale-105 flex flex-row items-center space-x-3 p-2 rounded-sm overflow-auto bg-slate-400">
                    <div className="shrink-0 border-2 border-zinc-700 w-20 h-20 bg-contain bg-no-repeat bg-center bg-white rounded-full"
                    style={{ backgroundImage: `url('/svg/speech.svg')`, backgroundSize: '80%' }}/>
                    <div className="flex text-wrap flex-col space-y-0">   
                        <label className="hover:cursor-pointer text-2xl text-white">Quote</label>
                        <label className="hover:cursor-pointer text-1xl text-gray-700">Can you tell who said this quote?</label>
                    </div>
                </div>
            </Link>
        </div>
    );  
}
