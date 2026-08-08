export default function Process() {



  const steps = [
    {
      number: "01",
      title: "Консультация",
      text: "Обсуждаем ваши задачи, пожелания и особенности объекта.",
    },
    {
      number: "02",
      title: "Проектирование",
      text: "Создаем дизайн-проект, подбираем материалы и согласовываем каждую деталь.",
    },
    {
      number: "03",
      title: "Реализация",
      text: "Выполняем все работы точно в срок с постоянным контролем качества.",
    },
    {
      number: "04",
      title: "Сдача объекта",
      text: "Передаем полностью готовое пространство, в которое хочется возвращаться.",
    },
  ];

  return (
  <section
    id="process"
    className="mx-auto max-w-7xl px-8 py-32"
  >
      <p className="text-center uppercase tracking-[0.35em] text-[#D6C2A3]">
        Как мы работаем
      </p>

      <h2 className="mt-6 text-center text-5xl font-bold text-[#1E1E1E]">
        Каждый этап продуман до мелочей
      </h2>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-[32px] border border-[#E7DED2] bg-white p-10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <p className="text-5xl font-bold text-[#D6C2A3]">
              {step.number}
            </p>

            <h3 className="mt-8 text-3xl font-semibold text-[#1E1E1E]">
              {step.title}
            </h3>

            <p className="mt-5 leading-8 text-[#6F6A63]">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}