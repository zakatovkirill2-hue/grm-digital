import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "LuxHouse",
      subtitle: "Премиальный ремонт квартир",
      description:
        "Современный лендинг, созданный для увеличения доверия и количества заявок.",
      status: "Готов",
      href: "/luxhouse",
      image: "/images/luxhouse-preview.jpg",
    },
    {
      title: "Velocity Auto",
      subtitle: "Автосервис",
      description:
        "Динамичный сайт с акцентом на скорость, качество и удобную запись.",
      status: "Скоро",
    },
    {
      title: "Bloom Coffee",
      subtitle: "Современная кофейня",
      description:
        "Стильный сайт для локального бизнеса с атмосферным дизайном.",
      status: "Скоро",
    },
  ];

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-32">
      <h2 className="text-center text-5xl font-bold">
        Наши проекты
      </h2>

      <p className="mt-5 text-center text-gray-400">
        Демонстрационные проекты, показывающие наш подход к дизайну и разработке.
      </p>

      <div className="mt-20 space-y-10">
        {projects.map((project) =>
          project.href ? (
            <Link
              key={project.title}
              href={project.href}
              className="group block rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10"
            >
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                    {project.status}
                  </span>

                  <h3 className="mt-6 text-4xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-green-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-green-400">
                    Открыть проект
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src="/images/luxhouse-preview.jpg"
                    alt="luxhouse-preview"
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 opacity-70"
            >
              <h3 className="text-4xl font-bold">{project.title}</h3>

              <p className="mt-2 text-green-400">
                {project.subtitle}
              </p>

              <p className="mt-6 text-gray-400">
                {project.description}
              </p>

              <span className="mt-8 inline-block rounded-full bg-zinc-800 px-4 py-2 text-zinc-300">
                Скоро
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}