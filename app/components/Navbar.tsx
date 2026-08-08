export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h2 className="text-2xl font-bold text-white">
          GRM Digital
        </h2>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a
            href="#services"
            className="transition hover:text-white"
          >
            Услуги
          </a>

          <a
            href="#portfolio"
            className="transition hover:text-white"
          >
            Кейсы
          </a>

          <a
            href="https://t.me/GRMdigital"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-green-400"
          >
            Telegram
          </a>
        </div>

        <a
          href="https://t.me/GRMdigital"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-white px-5 py-2 font-semibold text-black transition hover:scale-105"
        >
          Обсудить проект ↗
        </a>
      </nav>
    </header>
  );
}