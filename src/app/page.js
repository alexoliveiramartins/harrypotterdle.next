import Link from "next/link";
import Menu from "./components/menu";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-cover overflow-y-auto py-9" style={{ backgroundImage: `url(${'images/Wallpaper.webp'})` }}>
        <div className="flex flex-col mx-auto items-center space-y-7 max-w-4xl px-4">
            <Link onCick={console.log("A")} href="/" passHref legacyBehavior>
                <a className="transform transition-transform duration-500 hover:cursor-pointer hover:scale-110 font-harry text-white text-7xl">
                HarryPotter.dle
                </a>
            </Link>

            <div className="w-full items-center flex flex-col space-y-3">
                <Menu></Menu>
                {/* <HowToPlay></HowToPlay> */}
            </div>
        </div>
        <div 
            className="py-8 opacity-75 min-w-max flex font-light flex-row items-center space-x-1 justify-center text-gray-50">
            <footer>made by
            </footer>
            <a 
                href="https://github.com/alexoliveiramartins" 
                className="font-semibold decoration-dotted underline">
                alex
            </a>
        </div>
    </div>
  );
}
