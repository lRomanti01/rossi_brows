import ScheduleBox from "./ScheduleBox";

export default function ScheduleSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="mt-10 md:mt-20 mb-10">
        <h1 className="text-white text-center text-3xl md:text-5xl">
          Horario laboral
        </h1>
        <img className="w-full" src="/assets/highlight.png" />
      </div>

      <div className="w-full sm:w-[70%] md:w-[75%] xl:w-[50%] flex flex-col justify-between items-center text-white text-center font-bold text-2xl md:gap-7 px-10 py-2">
        <ScheduleBox day={"Lunes"} hours="3:00 - 8:00 PM" />
        <ScheduleBox day={"Martes"} hours="10:00 AM / OPEN" />
        <ScheduleBox day={"Miercoles"} hours="10:00 AM / OPEN" />
        <ScheduleBox day={"Jueves"} hours="10:00 AM / OPEN" />
        <ScheduleBox day={"Viernes"} hours="10:00 AM / OPEN" />
        <ScheduleBox day={"Sábados"} hours="10:00 AM / OPEN" />
      </div>
    </section>
  );
}
