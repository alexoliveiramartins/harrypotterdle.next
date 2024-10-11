import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/" passHref legacyBehavior>
            <a className="transform transition-transform duration-500 hover:cursor-pointer hover:scale-110 font-harry text-white text-7xl">
            HarryPotter.dle
            </a>
        </Link>
    );
}