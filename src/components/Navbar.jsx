import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-gray-950 z-50 px-6 py-4 flex justify-between items-center">
      <div className="hidden md:flex gap-6">
        {["home","about","skills","projects","services","contact"].map((section) => (
          <Link key={section} to={section} smooth={true} className="cursor-pointer hover:text-indigo-400">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-950 flex flex-col items-center gap-6 py-6 md:hidden">
          {["home","about","skills","projects","services","contact"].map((section) => (
            <Link key={section} to={section} smooth={true} onClick={() => setOpen(false)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
