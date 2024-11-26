import Link from "next/link";
import { IoColorWandOutline } from "react-icons/io5";
import Typing from "./_components/Typing";
export default function Home() {
  return (
    <div className="container mx-auto bg-white w-full h-full flex flex-col justify-between">
      <header className="flex justify-between">
        <button className="bg-orange-500 px-2">
          <IoColorWandOutline />
        </button>
        <nav className="flex justify-between items-center cursor-pointer gap-8">
          <Link href={"/resume"}>Resume</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link
            href={"#"}
            className="border border-orange-500 py-2 px-4 hover:bg-orange-500 hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </header>
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-5xl font-semibold uppercase text-center glitch-effect"
          data-text="I'm ALi Hemmat"
        >
          I&apos;m ALi Hemmat
        </p>
        <Typing />
      </div>
      <footer className="realtive">
        <p className="font-mono text-xs text-white absolute bottom-[0]">
          made with 🧡 by AliHemmat.
        </p>
      </footer>
    </div>
  );
}
