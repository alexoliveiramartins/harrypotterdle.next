export default function QuoteCard({ quote }){
    
    return(
        <div 
        className="font-lora space-y-3 p-4 flex flex-col max-w-96 items-center bg-opacity-90 justify-center border-2 border-gray-500 border-opacity-50 bg-gray-600 rounded w-full">
            <label className="text-white text-sm">WHO SAID THIS QUOTE?</label>
            <label className="text-white justify-center">&quot;&mdash; {quote}&quot;</label>
        </div>
    );
}