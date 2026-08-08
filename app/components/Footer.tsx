export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <div>
          <h3 className="text-2xl font-bold">
            GRM Digital
          </h3>

          <p className="mt-2 text-gray-500">
            Сайты • Реклама • AI
          </p>
        </div>

        <p className="text-gray-500">
          © 2026 GRM Digital. Все права защищены.
        </p>

      </div>
    </footer>
  );
}