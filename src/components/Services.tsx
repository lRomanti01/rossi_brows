import ServiceBox from "./ServiceBox";

export default function ServicesSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="my-10 md:my-20">
        <h1 className="text-white text-center text-3xl md:text-5xl">
          Servicios
        </h1>
        <img className="w-52" src="/assets/highlight.png" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-white text-center font-bold text-2xl md:gap-7 px-10 py-2">
        <div className="flex flex-col">
          <ServiceBox name="Diseño de cejas" />
          <ServiceBox name="Borrado de cejas tatuadas" />
          <ServiceBox name="Hidrafacial" />
          <ServiceBox name="Hollywood peel" />
        </div>

        <div className="w-full md:w-auto flex flex-col">
          <ServiceBox name="Laminación de cejas" />
          <ServiceBox name="Tintado de cejas" />
        </div>

        <div className="flex flex-col">
          <ServiceBox name="Borrado se cejas con láser" />
          <ServiceBox name="Facial clásico" />
          <ServiceBox name="Microdermabrasion" />
          <ServiceBox name="Tratamiento de acné" />
        </div>
      </div>
    </section>
  );
}
