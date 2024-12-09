import Typing from "./_components/Typing";
import Header from "./_components/Header";
export default function Home() {
  return (
    <div className="container mx-auto bg-white w-full h-full flex flex-col justify-between">
      <Header />
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
