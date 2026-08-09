export default function Philosophy() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* Левая часть */}
        <div>
          <p className="uppercase tracking-[0.3em] text-[#C9A96A]">
            О нас
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#1D1D1B]">
            Дом —
            

            это больше,
            

            чем ремонт.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#6F6A63]">
            Мы убеждены, что интерьер влияет на настроение,
            комфорт и качество жизни.
            Поэтому уделяем внимание каждой детали,
            создавая пространства,
            в которые хочется возвращаться каждый день.
          </p>
        </div>

        {/* Правая карточка */}
        <div className="rounded-[36px] border border-[#E7DED2] bg-[#FDFBF8] p-12 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

          <p className="text-sm uppercase tracking-[0.3em] text-[#C9A96A]">
            Философия бренда
          </p>

          <h3 className="mt-6 text-3xl font-semibold text-[#1D1D1B]">
            Пространство должно
            

            ощущаться своим.
          </h3>

          <p className="mt-6 leading-8 text-[#6F6A63]">
            Этот раздел демонстрирует,
            как можно представить ценности
            компании по ремонту без громких обещаний.
            Мы показываем подход к подаче,
            а не выдаем вымышленные факты.
          </p>

        </div>

      </div>
    </section>
  );
}