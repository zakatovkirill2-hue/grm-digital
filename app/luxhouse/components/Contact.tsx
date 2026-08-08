export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <div className="grid gap-16 rounded-[40px] bg-white p-12 shadow-[0_25px_80px_rgba(0,0,0,0.08)] lg:grid-cols-2">

        {/* Левая часть */}
        <div>
          <p className="uppercase tracking-[0.35em] text-[#C9A96A]">
            Контакты
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#1E1E1E]">
            Готовы обсудить ваш проект?
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-[#6F6A63]">
            Оставьте заявку, и мы свяжемся с вами,
            чтобы обсудить детали проекта и подготовить
            предварительный расчет стоимости.
          </p>

          <div className="mt-14 space-y-8">

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#C9A96A]">
                Телефон
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#1E1E1E]">
                +7 (999) 123-45-67
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#C9A96A]">
                Email
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#1E1E1E]">
                hello@luxhouse.ru
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#C9A96A]">
                График работы
              </p>

              <p className="mt-2 text-lg text-[#6F6A63]">
                Пн–Вс • 09:00 — 21:00
              </p>
            </div>

          </div>
        </div>

        {/* Правая часть */}
        <div className="rounded-[32px] bg-[#F7F4EF] p-10">

          <h3 className="text-3xl font-bold text-[#1E1E1E]">
            Получить расчет
          </h3>

          <p className="mt-4 text-[#6F6A63]">
            Заполните форму и мы свяжемся с вами в ближайшее время.
          </p>

          <form className="mt-10 space-y-6">

            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full rounded-xl border border-[#E5DDD1] bg-white px-5 py-4 outline-none transition focus:border-[#C9A96A]"
            />

            <input
              type="tel"
              placeholder="Телефон"
              className="w-full rounded-xl border border-[#E5DDD1] bg-white px-5 py-4 outline-none transition focus:border-[#C9A96A]"
            />

            <input
              type="text"
              placeholder="Площадь объекта (м²)"
              className="w-full rounded-xl border border-[#E5DDD1] bg-white px-5 py-4 outline-none transition focus:border-[#C9A96A]"
            />

            <textarea
              placeholder="Комментарий"
              rows={5}
              className="w-full resize-none rounded-xl border border-[#E5DDD1] bg-white px-5 py-4 outline-none transition focus:border-[#C9A96A]"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-[#C9A96A] py-4 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Получить расчет →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}