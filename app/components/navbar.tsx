import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#A52A2A] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold">
          4NIS
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-300 transition">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart Icon */}
        <button className="bg-white text-brown-700 px-4 py-2 rounded-md hover:bg-gray-200 transition">
          Cart (0)
        </button>
      </div>
    </nav>
  );
}
