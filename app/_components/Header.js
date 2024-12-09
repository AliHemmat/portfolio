import Link from "next/link";
import { IoColorWandOutline } from "react-icons/io5";

function Header() {
  return (
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
  );
}

export default Header;
