interface props {
  name: string;
}

export default function ServiceBox({ name }: props) {
  return (
    <div
      className={`w-full my-3 text-xl md:text-2xl flex justify-center items-center p-7 bg-[#dd5eb5] h-10 border-2 rounded-md transition-all shadow-[0_0_15px_1px_rgba(255,255,255,0.9)] md:shadow-[0_0_5px_1px_rgba(255,255,255,0.9)] md:hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.9)]`}
    >
      <span>{name}</span>
    </div>
  );
}
