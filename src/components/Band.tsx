import Marquee from "react-fast-marquee";

interface props {
    styles?: string;
}

export default function Band({styles}: props) {
  return (
    <div
      className={`${styles} w-full mt-5 flex justify-center items-center py-7 bg-[#dd5eb5] h-6 md:h-10 border-t-2 border-b-2 shadow-[0_0_15px_1px_rgba(255,255,255,0.9)] overflow-hidden whitespace-nowrap`}
    >
      <Marquee autoFill={true} pauseOnHover>
        <span className="mx-7 text-xl md:text-3xl text-white font-semibold">
          Rossi Brows
        </span>
        <span className="mx-7 text-xl md:text-3xl text-white font-semibold">
          Brows style
        </span>
      </Marquee>
    </div>
  );
}
