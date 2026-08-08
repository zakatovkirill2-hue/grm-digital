export default function CTA() {
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
