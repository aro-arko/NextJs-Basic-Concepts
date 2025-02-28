import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">My Sidebar</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile" className="text-gray-300 hover:text-white">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/settings" className="text-gray-300 hover:text-white">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
