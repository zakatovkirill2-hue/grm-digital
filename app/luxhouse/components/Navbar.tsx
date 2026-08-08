import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-2xl border border-[#E6DED2] bg-[#FDFBF8]/80 px-8 py-5 backdrop-blur-xl">

        <h2 className="text-xl font-semibold tracking-[0.25em] text-[#1D1D1B]">
          LUXHOUSE
        </h2>

        <nav className="hidden gap-10 text-sm lg:flex">

          <Link
            href="#about"
            className="text-[#6B665F] transition hover:text-[#C9A96A]"
          >
            О компании
          </Link>

          <Link
            href="#projects"
            className="text-[#6B665F] transition hover:text-[#C9A96A]"
          >
            Проекты
          </Link>

          <Link
            href="#process"
            className="text-[#6B665F] transition hover:text-[#C9A96A]"
          >
            Этапы
          </Link>

          <Link
            href="#contact"
            className="text-[#6B665F] transition hover:text-[#C9A96A]"
          >
            Контакты
          </Link>

        </nav>

        <Link
          href="#contact"
          className="rounded-xl border border-[#E6DED2] bg-[#F7F4EF] px-6 py-3 font-medium text-black transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          Получить расчет
        </Link>

      </div>
    </header>
  );
}