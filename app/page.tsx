"use client";
import ImageSlider from "./components/imageslider";
import Navbar from "./components/navbar";
import ProductCard from "./components/productCard";
import Image from "next/image";

const products = [
  { id: 1, name: "Baby Clothes", price: "$25", image: "/babyimage.jpg" },
  { id: 2, name: "Baby Clothes", price: "$25", image: "/babyimage1.jpg" },
  { id: 3, name: "Kitchen Utensils", price: "$30", image: "/kitchen ut.jpg" },
  { id: 4, name: "Kitchen Utensils", price: "$30", image: "/kitchen ut1.jpg" },
  { id: 4, name: "Laptop", price: "$800", image: "/pc.jpg" },
  { id: 4, name: "Laptop", price: "$800", image: "/pc2.jpg" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="relative w-full h-[400px] flex items-center justify-center bg-[url('/hero-image.jpg')] bg-cover bg-center">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-white text-4xl font-bold">Welcome to 4NIS</h1>
          <p className="text-white mt-2">
            Your go-to marketplace for quality clothes and electronics.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <ImageSlider />
      </section>
    </div>
  );
}
