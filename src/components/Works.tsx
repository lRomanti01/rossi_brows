import ImageContainer from "./ImageContainer";

export default function WorksSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="my-10 md:my-20">
        <h1 className="text-white text-center text-3xl md:text-5xl">
          Muestras de trabajos
        </h1>
        <img className="w-auto" src="/src/assets/highlight.png" />
      </div>

      <div className="w-full flex flex-col justify-between items-center text-white text-center font-bold text-2xl md:gap-10 px-10 py-2">
        <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
          <ImageContainer
            src={"../../public/assets/work1.png"}
            style={"w-[70%] m-5 md:m-0 md:w-96"}
          />

          <ImageContainer
            src={"../../public/assets/work2.png"}
            style={"w-[70%] m-5 md:m-0 md:w-96"}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
          <ImageContainer
            src={"../../public/assets/work3.png"}
            style={"w-[70%] m-5 md:m-0 md:w-80"}
          />
          <ImageContainer
            src={"../../public/assets/work4.png"}
            style={"w-[70%] m-5 md:m-0 md:w-80"}
          />
        </div>
      </div>
    </section>
  );
}
