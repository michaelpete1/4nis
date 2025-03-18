"use client";

import { ShoppingCart, Tag, Globe, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <section className="relative w-full h-[400px] flex items-center justify-center bg-[url('/about-hero.jpg')] bg-cover bg-center text-white text-center">
        <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-2xl">
          <h1 className="text-4xl font-bold">About 4NIS</h1>
          <p className="mt-2 text-lg">
            The ultimate Nigerian online marketplace for quality products at
            unbeatable prices.
          </p>
        </div>
      </section>
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose 4NIS?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
            <ShoppingCart size={50} className="text-blue-600" />
            <h3 className="text-xl font-semibold mt-4">Seamless Shopping</h3>
            <p className="mt-2 text-gray-600">
              Enjoy a smooth and convenient online shopping experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
            <Tag size={50} className="text-green-600" />
            <h3 className="text-xl font-semibold mt-4">Affordable Prices</h3>
            <p className="mt-2 text-gray-600">
              We offer unbeatable prices on high-quality products.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
            <Globe size={50} className="text-red-600" />
            <h3 className="text-xl font-semibold mt-4">Proudly Nigerian</h3>
            <p className="mt-2 text-gray-600">
              A marketplace built for Nigerians, by Nigerians.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
            <Users size={50} className="text-yellow-600" />
            <h3 className="text-xl font-semibold mt-4">Community Driven</h3>
            <p className="mt-2 text-gray-600">
              We support local businesses and connect buyers to sellers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
