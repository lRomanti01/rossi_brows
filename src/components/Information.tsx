export default function InformationSection() {
  return (
    <section className="w-full px-5 md:p-0 flex flex-col justify-center items-center">
      {/* <div className="my-10">
        <h1 className="text-white text-center text-5xl">Information</h1>
        <img className="w-52" src="/src/assets/highlight.png" />
      </div> */}

      <div className="my-10 mt-20 text-white text-center text-xl font-bold md:text-3xl flex flex-col gap-7 border-[1px] border-[#ef9cd4] rounded-md px-10 py-4 max-w-[750px] transition-all duration-700 hover:scale-105">
        <span>Experta en cuidado de la piel para tu rostro</span>
        <span>
          Te ayudo a que siempre mantengas esa belleza intachable para cada
          momento especial.
        </span>
        <span>
          Con mis servicios tendras mucha confianza de ti misma, autoestima y
          seguridad.
        </span>
      </div>
    </section>
  );
}
