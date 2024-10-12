export default function Attribute({ name, correct, image, bgSize, opacity, character}) {
    return (
        <div className="font-lora font-light hover:opacity-100 bg-opacity-90 w-20 h-20 shadow-md flex-shrink-0 rounded-lg overflow-hidden text-balance">
            <a className={`
                ${correct ? "bg-green-600" : "bg-red-600"} 
                ${character ? `hover:text-opacity-100 text-opacity-0` : ''} h-20 w-10p-10 flex justify-center items-center rounded-lg text-white 
                bg-center bg-no-repeat text-center font-semibold relative`}
            >
                <span className={`${character ? `bg-opacity-0 bg-slate-600 hover:bg-opacity-60` : ''} text-sm relative rounded z-10`}>{name}</span>
                <span 
                    className={`${bgSize ? bgSize : "bg-cover bg-center"} absolute inset-0 ${opacity ? opacity : ""}`}
                    style={{ backgroundImage: `url(${image})` }}
                ></span>
            </a>
        </div>
    );
}