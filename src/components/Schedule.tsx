import ScheduleBox from "./ScheduleBox";
import ScrollAnimation from "react-animate-on-scroll";

export default function ScheduleSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="mt-10 md:mt-20 mb-10">
        <h1 className="text-white text-center text-3xl md:text-5xl">
          Horario laboral
        </h1>
        <img className="w-full" src="/assets/highlight.png" />
      </div>

      <div className="w-full sm:w-[70%] md:w-[75%] xl:w-[50%] flex flex-col justify-between items-center font-bold text-white text-center md:gap-7 px-10 py-2">
        <ScrollAnimation animateIn="fadeIn" className="w-full">
          <ScheduleBox day={"Lunes"} hours="Cerrado" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" className="w-full">
          <ScheduleBox day={"Martes"} hours="11:00 AM - 06:00 PM" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" className="w-full">
          <ScheduleBox day={"Miercoles"} hours="11:00 AM - 06:00 PM" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" className="w-full">
          <ScheduleBox day={"Jueves"} hours="03:00 PM - 09:00 PM" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" className="w-full">
          <ScheduleBox day={"Viernes"} hours="03:00 PM - 09:00 PM" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" className="w-full">
          <ScheduleBox day={"Sábados"} hours="03:00 PM - 09:00 PM" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" className="w-full">
          <ScheduleBox day={"Domingo"} hours="Cerrado" />
        </ScrollAnimation>
      </div>
    </section>
  );
}
