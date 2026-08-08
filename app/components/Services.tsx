export default function Services() {
  const services = [
    {
      title: "Создание сайтов",
      description: "Современные сайты, которые помогают получать заявки.",
    },
    {
      title: "Настройка рекламы",
      description: "Запускаем рекламу, которая приводит клиентов.",
    },
    {
      title: "AI автоматизация",
      description: "Внедряем искусственный интеллект для экономии времени.",
    },
    {
      title: "Дизайн бренда",
      description: "Создаем стиль, который запоминается.",
    },
  ];

  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <h2 className="text-center text-5xl font-bold">
        Наши услуги
      </h2>

      <p className="mt-5 text-center text-gray-400">
        Всё, что помогает бизнесу расти.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10"
          >
            <h3 className="text-2xl font-bold text-green-400">
              {service.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}