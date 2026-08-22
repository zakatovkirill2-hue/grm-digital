"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

      {/* Фоновое свечение */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/30 blur-[180px]" />

      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-full border border-green-500/40 px-4 py-2 text-sm text-green-400"
      >
        Digital Agency • Websites • AI
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8 max-w-5xl text-6xl font-extrabold leading-tight md:text-8xl"
      >
        Создаем сайты,
        

        которые продают.
      </motion.h1>
 
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-8 max-w-3xl text-xl text-gray-400"
      >
        Современные сайты, реклама и AI-решения,
        которые помогают бизнесу получать клиентов.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-50 mt-12 flex gap-5"
      >
        <button className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
          <a
  href="https://t.me/GRMdigital"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex whitespace-nowrap rounded-xl bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
>
  Обсудить проект
</a>
        </button>

        <Link
          href="#portfolio"
          className="rounded-xl border border-white/10 px-8 py-4 transition hover:border-green-500 hover:text-green-400"
        >
          Кейсы
        </Link>
      </motion.div>
    </section>
  );
}