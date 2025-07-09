
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';


export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden
                 bg-fixed bg-center bg-cover px-4 text-center"
      style={{ backgroundImage: "url('/404-bg.jpg')" }}
    >
     
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center"
      >
        <h1 className="text-6xl font-extrabold tracking-widest text-white md:text-7xl">
          404
        </h1>

        <p className="mt-6 text-lg font-semibold text-gray-100">
          We’re currently working on this page
        </p>
        <p className="mt-2 text-gray-300">
          Thanks for your patience — we’ll have it up and running soon.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-gray-600 px-6 py-3 text-white shadow-md
                     transition hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Back&nbsp;Home
        </Link>
      </motion.div>
    </motion.main>
  );
}
