"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-8 rounded-2xl shadow-xl max-w-lg w-full"
      >
        <h1 className="text-3xl font-bold text-green-500 mb-4">
          ✅ Thank You!
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          Aapka message successfully receive ho gaya hai.  
          Mai jald hi aapko reply karunga.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-500 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-green-400 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
