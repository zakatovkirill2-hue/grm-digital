export default function Projects() {
  return (
    <section
  id="projects"
  className="mx-auto max-w-7xl px-8 py-32"
>
    
   
      <p className="text-center uppercase tracking-[0.35em] text-[#D6C2A3]">
        Пример проектов
      </p>

      <h2 className="mt-6 text-center text-5xl font-bold text-[#1E1E1E]">
        Интерьеры, в которых хочется жить
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-[#6F6A63]">
        Демонстрационный раздел, показывающий,
        как может выглядеть портфолио компании.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

     <div className="group relative h-[620px] overflow-hidden rounded-[32px]">
  <img
    src="/images/living-room.jpg"
    alt="living-room"
    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

  <div className="absolute bottom-8 left-8">
    <p className="text-sm uppercase tracking-[0.3em] text-[#E7D7B5]">
      Концепт
    </p>

    <h3 className="mt-2 text-3xl font-bold text-white">
      Современная гостиная
    </h3>
  </div>
</div>

        <div className="flex flex-col gap-8">

          <div className="group relative h-[290px] overflow-hidden rounded-[32px]">
  <img
    src="/images/kitchen.jpg"   
    alt="Kitchen"
    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
    Кухня
  </h3>
</div>

         <div className="group relative h-[290px] overflow-hidden rounded-[32px]">
  <img
    src="/images/bedroom.jpg"
    alt="bedroom"
    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
    Спальня
  </h3>
</div>

        </div>

      </div>

    </section>
  );
}