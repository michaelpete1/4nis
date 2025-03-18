export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pb-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900">About 4NIS</h1>
        <p className="text-lg text-gray-700 mt-4">
          Welcome to <span className="font-semibold">4NIS</span>, your home away
          from home! Our platform makes it easy to{" "}
          <span className="font-semibold">add, buy, and view</span> goods
          effortlessly. Whether you're searching for the latest fashion or
          top-quality electronics, we’ve got you covered.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Experience a seamless online marketplace designed to bring convenience
          and quality to your fingertips. Join us today and discover a better
          way to shop!
        </p>
      </main>
      <footer className="mt-auto py-4 text-center bg-gray-100">
        <p className="text-gray-600">
          © {new Date().getFullYear()} 4NIS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
