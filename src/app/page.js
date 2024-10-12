import Link from "next/link";
import Menu from "./components/misc/Menu";
import Logo from "./components/misc/Logo.js";
import MadeBy from "./components/misc/Madeby.js";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-cover overflow-y-auto py-9" style={{ backgroundImage: `url(${'images/Wallpaper.webp'})` }}>
        <div className="flex flex-col mx-auto items-center space-y-7 max-w-4xl px-4">
            <Logo/>

            <div className="w-full items-center flex flex-col space-y-3">
                <Menu></Menu>
            </div>
        </div>
        <MadeBy />
    </div>
  );
}
