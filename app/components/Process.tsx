export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Знакомство",
      text: "Обсуждаем ваш бизнес, цели и задачи проекта.",
    },
    {
      number: "02",
      title: "Дизайн",
      text: "Создаем современный интерфейс, который вызывает доверие.",
    },
    {
      number: "03",
      title: "Разработка",
      text: "Верстаем быстрый, адаптивный и удобный сайт.",
    },
    {
      number: "04",
      title: "Запуск",
      text: "Подключаем аналитику, рекламу и помогаем получать первых клиентов.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <h2 className="text-center text-5xl font-bold">
        Как мы работаем
      </h2>

      <p className="mt-5 text-center text-gray-400">
        Прозрачный процесс от идеи до первых заявок.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-green-500"
          >
            <span className="text-5xl font-extrabold text-green-500">
              {step.number}
            </span>

            <h3 className="mt-6 text-2xl font-bold">
              {step.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}