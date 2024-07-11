interface props {
  day: string;
  hours?: string;
}

export default function ScheduleBox({ day, hours }: props) {
  return (
    <div
      className={`w-full my-3 md:my-1 flex justify-between sm:justify-around items-center p-3 md:p-7 bg-[#dd5eb5] h-16 md:h-20 text-[4vw] sm:text-2xl md:text-4xl border-2 rounded-md transition-all shadow-[0_0_15px_1px_rgba(255,255,255,0.9)] md:shadow-[0_0_5px_1px_rgba(255,255,255,0.9)] md:hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.9)]`}
    >
      <span>{day}</span>
      <span>{hours}</span>
    </div>
  );
}
