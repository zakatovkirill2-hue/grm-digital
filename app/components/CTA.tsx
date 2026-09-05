
"use client";

import { useEffect, useState } from "react";export default function CTA() { const [calculationText, setCalculationText] = useState("");

useEffect(() => {
  const saved = sessionStorage.getItem("grm-calculation");

  if (!saved) return;

  try {
    const calculation = JSON.parse(saved);

    const extrasText =
      calculation.extras?.length > 0
        ? calculation.extras.join(", ")
        : "Без дополнительных функций";

    const text = [
      "Расчёт проекта:",
      `Проект: ${calculation.project}`,
      `Страницы: ${calculation.pages}`,
      `Дополнительно: ${extrasText}`,
      `Ориентировочная стоимость: ${calculation.price}`,
    ].join("\n");

    setCalculationText(text);
  } catch {
    sessionStorage.removeItem("grm-calculation");
  }
}, []); 
  return (
    <section
      id="contact" 
      className="mx-auto max-w-7xl px-6 py-32"> 
    
      <div className="rounded-[40px] border border-green-500/20 bg-gradient-to-br from-green-500/10 to-black p-16 text-center">

        <h2 className="text-5xl font-bold">
          Готовы вывести бизнес на новый уровень?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
          Расскажите о своей задаче, а мы предложим решение,
          которое поможет привлекать больше клиентов.
        </p>
        {calculationText && (
  <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-green-500/20 bg-green-500/5 p-6 text-left">
    <p className="mb-3 text-sm font-medium text-green-400">
      Ваш предварительный расчёт
    </p>

    <p className="whitespace-pre-line text-sm leading-7 text-gray-300">
      {calculationText}
    </p>
  </div>
)}

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <button className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
            Обсудить проект
          </button>

          <button className="rounded-xl border border-white/10 px-8 py-4 transition hover:border-green-500 hover:text-green-400">
            <a
  href="https://t.me/GRMdigital"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Telegram
</a>
          </button>
        </div>

      </div>
    </section>
  );
}
