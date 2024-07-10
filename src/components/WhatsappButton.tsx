import IconWhatsapp from "./icons/IconWhatsapp";

interface props {
  phoneNumber: number;
  message: string;
}

export default function WhatsAppButton({ phoneNumber, message }: props) {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      className="text-white font-bold p-4 px-3 sm:px-5 md:px-10 flex flex-row items-center gap-5 bg-[#dd5eb5] border-2 rounded-3xl shadow-[0_0_15px_1px_rgba(255,255,255,0.9)] transition-all animate-pulseFast"
      onClick={handleClick}
    >
      <IconWhatsapp className="w-5 md:w-10 md:h-10 fill-white" />
      <span className="text-[3vw] md:text-xl">Agenda tu cita conmigo!</span>
    </button>
  );
}
