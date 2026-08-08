import {
  Rocket,
  Palette,
  TrendingUp,
  Bot,
} from "lucide-react";

export default function WhyUs() {
  const items = [
    {
      icon: <Rocket size={36} />,
      title: "Быстрый запуск",
      text: "Первые концепты уже через 24–48 часов.",
    },
    {
      icon: <Palette size={36} />,
      title: "Современный дизайн",
      text: "Минимализм, адаптация под любые устройства и высокая скорость.",
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Фокус на результате",
      text: "Создаем сайты, которые помогают получать заявки.",
    },
    {
      icon: <Bot size={36} />,
      title: "AI автоматизация",
      text: "Используем искусственный интеллект для ускорения работы бизнеса.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <h2 className="text-center text-5xl font-bold">
        Почему выбирают GRM Digital
      </h2>

      <p className="mt-5 text-center text-gray-400">
        Мы создаем не просто красивые сайты, а инструменты для роста бизнеса.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500"
          >
            <div className="text-green-400 transition group-hover:scale-110">
              {item.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}