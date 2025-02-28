import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex max-w-7xl justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Logo</Link>
        </div>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link href="/register" className="text-gray-300 hover:text-white">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
