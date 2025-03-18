"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md py-4 px-6 flex items-center justify-between text-white">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/4nis logo.jpg"
          alt="4NIS Logo"
          width={120}
          height={40}
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-400 transition duration-300">
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-400 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-gray-400 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
