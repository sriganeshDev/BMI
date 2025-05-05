"use client";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4 text-center">
      <div className="text-7xl md:text-9xl font-bold text-gray-800 animate-bounce mb-4">
        🚫
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
      >
        Go to Homepage
      </button>
    </div>
  );
}
