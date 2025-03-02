"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex max-w-7xl justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Logo</Link>
        </div>
        <div className="space-x-4">
          <Link
            cla
            href="/about"
            className={
              pathName == "/about"
                ? "text-blue-500 underline font-bold"
                : "text-gray-300 hover:text-white"
            }
          >
            About
          </Link>
          <Link
            href="/contact"
            className={
              pathName == "/contact"
                ? "text-blue-500 underline font-bold"
                : "text-gray-300 hover:text-white"
            }
          >
            Contact
          </Link>
          <Link
            href="/dashboard"
            className={
              pathName == "/dashboard"
                ? "text-blue-500 underline font-bold"
                : "text-gray-300 hover:text-white"
            }
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            className={
              pathName == "/login"
                ? "text-blue-500 underline font-bold"
                : "text-gray-300 hover:text-white"
            }
          >
            Login
          </Link>
          <Link
            href="/register"
            className={
              pathName == "/register"
                ? "text-blue-500 underline font-bold"
                : "text-gray-300 hover:text-white"
            }
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
