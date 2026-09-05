"use client";

import { useState } from "react";

import { motion } from "framer-motion";

const projectTypes = [

  {

    id: "landing",

    title: "Лендинг",

    description: "Одностраничный сайт для привлечения клиентов",

    price: 15000,

  },

  {

    id: "business",

    title: "Сайт компании",

    description: "Полноценный сайт с несколькими страницами",

    price: 30000,

  },

  {

    id: "shop",

    title: "Интернет-магазин",

    description: "Каталог товаров и функционал для продаж",

    price: 50000,

  },

];

const pages = [

  {

    id: "one",

    title: "1 страница",

    price: 0,

  },

  {

    id: "five",

    title: "3–5 страниц",

    price: 8000,

  },

  {

    id: "ten",

    title: "6–10 страниц",

    price: 15000,

  },

  {

    id: "more",

    title: "10+ страниц",

    price: 25000,

  },

];

const extras = [

  {

    id: "animation",

    title: "Продвинутая анимация",

    price: 5000,

  },

  {

    id: "form",

    title: "Форма заявки",

    price: 3000,

  },

  {

    id: "ai",

    title: "AI-функции",

    price: 10000,

  },

  {

    id: "seo",

    title: "SEO-оптимизация",

    price: 7000,

  },

];

export default function Calculator() {

  const [projectType, setProjectType] = useState("landing");

  const [pageCount, setPageCount] = useState("one");

  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const selectedProject = projectTypes.find(

    (item) => item.id === projectType

  );

  const selectedPages = pages.find(

    (item) => item.id === pageCount

  );

  const extrasPrice = extras

    .filter((item) => selectedExtras.includes(item.id))

    .reduce((sum, item) => sum + item.price, 0);

  const total =

    (selectedProject?.price || 0) +

    (selectedPages?.price || 0) +

    extrasPrice;

  const minPrice = Math.round(total * 0.9);

  const maxPrice = Math.round(total * 1.1);

  const toggleExtra = (id: string) => {

    setSelectedExtras((current) =>

      current.includes(id)

        ? current.filter((item) => item !== id)

        : [...current, id]

    );

  };

  return (

    <section

      id="calculator"

      className="mx-auto max-w-7xl px-6 py-32"

    >

      {/* Заголовок */}

      <div className="mb-16 max-w-3xl">

        <p className="text-sm uppercase tracking-[0.35em] text-green-400">

          Калькулятор

        </p>

        <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">

          Узнайте примерную стоимость сайта

        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">

          Выберите параметры проекта — калькулятор автоматически

          рассчитает ориентировочную стоимость.

        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

        {/* Левая часть */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">

          {/* Тип проекта */}

          <div>

            <h3 className="text-xl font-semibold">

              01. Какой сайт вам нужен?

            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

              {projectTypes.map((item) => {

                const active = projectType === item.id;

                return (

                  <button

                    key={item.id}

                    type="button"

                    onClick={() => setProjectType(item.id)}

                    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${

                      active

                        ? "border-green-500 bg-green-500/10"

                        : "border-white/10 bg-white/[0.02] hover:border-white/20"

                    }`}

                  >

                    <div className="flex items-center justify-between">

                      <span className="font-semibold">

                        {item.title}

                      </span>

                      {active && (

                        <span className="text-green-400">

                          ✓

                        </span>
                        )}

                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-400">

                      {item.description}

                    </p>

                    <p className="mt-5 text-sm text-green-400">

                      от {item.price.toLocaleString("ru-RU")} ₽

                    </p>

                  </button>

                );

              })}

            </div>

          </div>

          {/* Количество страниц */}

          <div className="mt-12">

            <h3 className="text-xl font-semibold">

              02. Сколько страниц?

            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              {pages.map((item) => {

                const active = pageCount === item.id;

                return (

                  <button

                    key={item.id}

                    type="button"

                    onClick={() => setPageCount(item.id)}

                    className={`rounded-xl border px-4 py-4 text-sm transition-all duration-300 ${

                      active

                        ? "border-green-500 bg-green-500/10 text-green-400"

                        : "border-white/10 text-gray-300 hover:border-white/20"

                    }`}

                  >

                    {item.title}

                    {item.price > 0 && (

                      <span className="ml-1 text-gray-500">

                        +{item.price.toLocaleString("ru-RU")} ₽

                      </span>

                    )}

                  </button>

                );

              })}

            </div>

          </div>

          {/* Дополнительные функции */}

          <div className="mt-12">

            <h3 className="text-xl font-semibold">

              03. Что добавить?

            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {extras.map((item) => {

                const active = selectedExtras.includes(item.id);

                return (

                  <button

                    key={item.id}

                    type="button"

                    onClick={() => toggleExtra(item.id)}

                    className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-all duration-300 ${

                      active

                        ? "border-green-500 bg-green-500/10"

                        : "border-white/10 hover:border-white/20"

                    }`}

                  >

                    <div>

                      <p className="font-medium">

                        {item.title}

                      </p>

                      <p className="mt-1 text-sm text-gray-500">

                        +{item.price.toLocaleString("ru-RU")} ₽

                      </p>

                    </div>

                    <div

                      className={`flex h-6 w-6 items-center justify-center rounded-full border text-sm ${

                        active

                          ? "border-green-500 bg-green-500 text-black"

                          : "border-white/20"

                      }`}

                    >

                      {active ? "✓" : ""}

                    </div>

                  </button>

                );

              })}

            </div>

          </div>

        </div>

        {/* Правая часть — стоимость */}

        <motion.div

          layout

          className="h-fit rounded-3xl border border-green-500/20 bg-green-500/[0.06] p-8 lg:sticky lg:top-28"

        >

          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">

            Ориентировочная стоимость

          </p>

          <div className="mt-8">

            <p className="text-4xl font-bold md:text-5xl">

              {minPrice.toLocaleString("ru-RU")}–{" "}

              {maxPrice.toLocaleString("ru-RU")} ₽

            </p>

            <p className="mt-5 text-sm leading-6 text-gray-400">

              Финальная стоимость зависит от сложности проект
              а,

              дизайна и необходимых функций.

            </p>

          </div>

          <div className="my-8 h-px bg-white/10" />

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">

              <span className="text-gray-400">

                Проект

              </span>

              <span>

                {selectedProject?.title}

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-400">

                Страницы

              </span>

              <span>

                {selectedPages?.title}

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-400">

                Дополнительно

              </span>

              <span>

                {selectedExtras.length}

              </span>

            </div>

          </div>

         <button
  type="button"
  onClick={() => {
    const calculation = {
      project: selectedProject?.title || "",
      pages: selectedPages?.title || "",
      extras: extras
        .filter((item) => selectedExtras.includes(item.id))
        .map((item) => item.title),
      price: `${minPrice.toLocaleString("ru-RU")}–${maxPrice.toLocaleString("ru-RU")} ₽`,
    };

    sessionStorage.setItem(
      "grm-calculation",
      JSON.stringify(calculation)
    );

    window.location.href = "#contact";
  }}
  className="mt-8 block w-full rounded-xl bg-green-500 px-6 py-4 text-center font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20"
>
  Получить точный расчёт
</button>

          <p className="mt-4 text-center text-xs leading-5 text-gray-500">

            Расчёт является предварительным и не является

            публичной офертой.

          </p>

        </motion.div>

      </div>

      {/* Индивидуальный проект */}

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-10">
        <p className="text-xl font-semibold md:text-2xl">
          Нужен индивидуальный проект?
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-gray-400">
          Не нашли подходящий вариант? Напишите нам в Telegram —
          обсудим задачу и подготовим индивидуальное решение.
        </p>

        <a
          href="https://t.me/GRMdigital"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-xl border border-green-500/40 bg-green-500/10 px-6 py-3 font-medium text-green-400 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-black"
        >
          Написать в Telegram →
        </a>
      </div>
    </section>
  );
}