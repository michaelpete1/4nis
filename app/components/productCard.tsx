import Image from "next/image";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg transition hover:shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-[200px] object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">{product.price}</p>
      <button className="mt-3 w-full bg-brown-600 text-white py-2 rounded-md hover:bg-brown-700 transition">
        View Details
      </button>
    </div>
  );
}
