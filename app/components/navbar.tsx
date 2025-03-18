"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Info, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md py-4 px-6 flex items-center justify-between text-white">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/4nis logo.jpg"
          alt="4NIS Logo"
          width={120}
          height={40}
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-gray-400 transition duration-300"
        >
          <Home size={20} /> Home
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-1 hover:text-gray-400 transition duration-300"
        >
          <Info size={20} /> About
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-1 hover:text-gray-400 transition duration-300"
        >
          <Mail size={20} /> Contact
        </Link>
      </div>
    </nav>
  );
}
