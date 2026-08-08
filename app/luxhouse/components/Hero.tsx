"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-8">

      {/* Левая часть */}
      <div className="w-full lg:w-1/2">

        <p className="mb-6 uppercase tracking-[0.4em] text-[#E7D7B5]">
          LUXHOUSE
        </p>

        <h1 className="text-6xl font-bold leading-tight text-[#1E1E1E] lg:text-7xl">
          Место,
          

          где комфорт
          

          становится привычкой
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[#6F6A63]">
          Премиальный ремонт квартир и домов.
          Полный цикл работ — от первой идеи
          до финальной отделки.
        </p>

        <div className="mt-12 flex gap-5">

          <Link
            href="#contact"
            className="rounded-xl bg-[#E7D7B5] px-8 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          >
            Получить расчет
          </Link>

          <Link
            href="#projects"
            className="rounded-xl border border-[#E7D7B5] px-8 py-4 text-[#E7D7B5] transition duration-300 hover:bg-[#E7D7B5] hover:text-black"
          >
            Наши проекты
          </Link>

        </div>

      </div>

      {/* Правая часть */}
      <div className="hidden w-1/2 justify-end lg:flex">

        <div className="h-[720px] w-[560px] overflow-hidden rounded-[36px] border border-[#E7D7B5]/30 bg-neutral-900 shadow-2xl">

          <img
            src="/images/luxury-interior.jpg"
            alt="Luxury Interior"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />

        </div>

      </div>

    </section>
  );
}